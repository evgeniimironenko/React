import { Component } from "react";
import api from "./helpers/helpers";
import SearchBar from "./searchbar/Searchbar";
import Loader from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";
import LoadMore from "./button/Button";
import Modal from "./modal/Modal";

class Gallery extends Component {
  state = {
    data: [],
    isLoading: false,
    error: null,
    searchValue: "",
    page: 1,
    total: 0,
    showModal: false,
    modalImage: {
      url: "",
      alt: "",
    },
  };

  fetchImages = async (searchValue, page) => {
    this.setState({ isLoading: true });

    try {
      const response = await api.fetchData(searchValue, page);
      const newData = response.data.hits;

      this.setState((prevState) => ({
        data: [...prevState.data, ...newData],
        total: response.data.total,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = (evt) => {
    evt.preventDefault();
    const inputValue = evt.target.search.value;

    if (inputValue === this.state.searchValue) return;

    this.setState(
      {
        data: [],
        searchValue: inputValue,
        page: 1,
        error: null,
      },
      () => this.fetchImages(inputValue, 1)
    );
  };

  loadNextPage = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => this.fetchImages(this.state.searchValue, this.state.page)
    );
  };

  toggleModal = (url = "", alt = "") => {
    this.setState((prevState) => ({
      modalImage: { url, alt },
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { data, isLoading, error, total, showModal, modalImage } = this.state;
    const isLoadMoreVisible = data.length < total;

    return (
      <>
        <SearchBar onSubmit={this.handleSearch} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {!isLoading && data.length === 0 && !error && (
          <p>Nothing found, please correct your search query</p>
        )}
        {data.length > 0 && (
          <ImageGallery onShowModal={this.toggleModal} data={data} />
        )}
        {isLoading && <Loader />}
        {!isLoading && data.length !== total && (
          <>{isLoadMoreVisible && <LoadMore handleCLick={this.loadNextPage} />}</>
        )}
        {showModal && (
          <Modal
            imageUrl={modalImage.url}
            alt={modalImage.alt}
            closeModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default Gallery;

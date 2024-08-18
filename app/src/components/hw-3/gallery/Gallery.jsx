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
    imageUrl: "",
    alt: "",
  };

  fetchImages = async (value, page) => {
    this.setState({ isLoading: true });

    try {
      const response = await api.fetchData(value, page);
      const newData = response.data.hits.filter(
        (newItem) => !this.state.data.some((item) => item.id === newItem.id)
      );

      this.setState((prevState) => ({
        data: [...prevState.data, ...newData],
        searchValue: value,
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

    this.setState(
      (prevState) => ({
        data: prevState.searchValue !== inputValue ? [] : prevState.data,
        searchValue: inputValue,
        page: 1,
      }),
      () => this.fetchImages(inputValue, 1)
    );
  };

  loadNextPage = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => this.fetchImages(this.state.searchValue, this.state.page)
    );
  };

  toggleModal = (imgUrl = "", alt = "") => {
    this.setState((prevState) => ({
      imageUrl: imgUrl,
      alt,
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { data, isLoading, error, total, showModal, imageUrl, alt } =
      this.state;
    const isLoadMoreVisible = data.length < total;

    return (
      <>
        <SearchBar onSubmit={this.handleSearch} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {!isLoading && data.length === 0 && (
          <p>Nothing found, please correct your search query</p>
        )}
        {isLoading && <Loader />}
        {!isLoading && data.length > 0 && (
          <>
            <ImageGallery onShowModal={this.toggleModal} data={data} />
            {isLoadMoreVisible && <LoadMore handleClick={this.loadNextPage} />}
          </>
        )}
        {showModal && (
          <Modal imageUrl={imageUrl} alt={alt} closeModal={this.toggleModal} />
        )}
      </>
    );
  }
}

export default Gallery;

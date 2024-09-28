import { Component, useState } from "react";
import api from "./helpers/helpers";
import SearchBar from "./searchbar/Searchbar";
import Loader from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";
import LoadMore from "./button/Button";
import Modal from "./modal/Modal";

function Gallery() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState({ url: "", alt: "" });
  const isLoadMoreVisible = data.length < total;

  async function fetchImages(searchValue, page) {
    setIsLoading(true);

    try {
      const response = await api.fetchData(searchValue, page);
      const newData = response.data.hits;
      setData((data) => [...data, ...newData]);
      setTotal(response.data.total);
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(evt) {
    evt.preventDefault();
    const inputValue = evt.target.search.value;

    if (inputValue === searchValue) return;

    setData([]);
    setSearchValue(inputValue);
    setPage(1);
    setError(null);
    fetchImages(inputValue, 1);
  }

  function loadNextPage() {
    setPage((page) => page + 1);
    fetchImages(searchValue, page);
  }

  function toggleModal(url = "", alt = "") {
    setModalImage({ url, alt });
    setShowModal((showModal) => !showModal);
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {!isLoading && data.length === 0 && !error && (
        <p>Nothing found, please correct your search query</p>
      )}
      {data.length > 0 && (
        <ImageGallery onShowModal={toggleModal} data={data} />
      )}
      {isLoading && <Loader />}
      {!isLoading && data.length !== total && (
        <>{isLoadMoreVisible && <LoadMore handleCLick={loadNextPage} />}</>
      )}
      {showModal && (
        <Modal
          imageUrl={modalImage.url}
          alt={modalImage.alt}
          closeModal={toggleModal}
        />
      )}
    </>
  );
}

export default Gallery;

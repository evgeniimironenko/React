import { Component } from "react";
import api from "./helpers/helpers";
import SearchBar from "./searchbar/Searchbar";
import Loader from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";
import LoadMore from "./button/Button";

class Gallery extends Component {
  state = {
    data: [],
    isLoading: false,
    error: null,
  };

  render() {
    const { data, isLoading, error } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSearch} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {!isLoading && data.length > 0 ? (
          <ImageGallery data={data} />
        ) : (
          !isLoading && <p>Nothing found, please correct your search query</p>
        )}
        {isLoading && <Loader />}
        {!isLoading && data.length > 0 && (
          <LoadMore handleCLick={this.onNextPage} />
        )}
      </>
    );
  }
}

export default Gallery;

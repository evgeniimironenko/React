import { Component } from "react";
import api from "./helpers/helpers";
import SearchBar from "./searchbar/Searchbar";
import Loader from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";

class Gallery extends Component {
  state = {
    data: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const data = await api.fetchData("sigma");
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { data, isLoading, error } = this.state;
    return (
      <>
        <SearchBar />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {data.length > 0 ? (
          <ImageGallery data={data} />
        ) : (
          <p>Nothing found, please correct your search query</p>
        )}
      </>
    );
  }
}

export default Gallery;

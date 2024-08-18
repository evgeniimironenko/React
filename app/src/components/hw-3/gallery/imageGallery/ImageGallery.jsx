import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import css from "../gallery.module.css";
const ImageGallery = ({ data, onShowModal }) => (
  <ul className={css.ImageGallery}>
    {data.map((item) => (
      <ImageGalleryItem
        key={item.id}
        onShowModal={onShowModal}
        src={item.webformatURL}
        alt={item.tags}
        modalUrl={item.largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;

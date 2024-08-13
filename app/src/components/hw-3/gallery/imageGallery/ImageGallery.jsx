import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import css from "../gallery.module.css";
const ImageGallery = ({ data }) => (
  <ul className={css.ImageGallery}>
    {data.map((item) => (
      <ImageGalleryItem key={item.id} src={item.webformatURL} alt={item.tags} />
    ))}
  </ul>
);

export default ImageGallery;

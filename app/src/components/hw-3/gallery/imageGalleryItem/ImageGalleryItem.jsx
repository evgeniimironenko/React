import css from "../gallery.module.css";

const ImageGalleryItem = ({ src, alt }) => (
  <li className={css.ImageGalleryItem}>
    <img src={src} alt={alt} />
  </li>
);

export default ImageGalleryItem;

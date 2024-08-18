import css from "../gallery.module.css";

const ImageGalleryItem = ({ onShowModal, src, alt, modalUrl }) => (
  <li
    className={css.ImageGalleryItem}
    onClick={() => onShowModal(modalUrl, alt)}
  >
    <img src={src} alt={alt} />
  </li>
);

export default ImageGalleryItem;

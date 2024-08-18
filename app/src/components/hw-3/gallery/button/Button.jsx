import css from "../gallery.module.css";

const LoadMore = ({ handleCLick }) => (
  <div className={css.loadMoreWrapper}>
    <button onClick={handleCLick} className={css.loadMoreButton}>
      Load more
    </button>
  </div>
);

export default LoadMore;

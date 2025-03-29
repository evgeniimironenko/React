import { ClipLoader } from "react-spinners";
import css from "../gallery.module.css";

const Loader = () => (
  <div className={css.spinner}>
    <ClipLoader
      color="#aab6fc"
      loading={true}
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);

export default Loader;

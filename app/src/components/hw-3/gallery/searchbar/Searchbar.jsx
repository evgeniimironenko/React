import css from "../gallery.module.css";
import { nanoid } from "nanoid";
const inputId = nanoid();

const SearchBar = ({ onSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <label htmlFor={inputId} className={css.SearchFormLabel}>
          Search
        </label>
      </button>

      <input
        className={css.SearchFormInput}
        type="text"
        placeholder="Search images and photos"
        name="search"
        id={inputId}
      />
    </form>
  </header>
);

export default SearchBar;

import css from "../gallery.module.css";

const SearchBar = ({ onSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormLabel}>Search</span>
      </button>

      <input
        className={css.SearchFormInput}
        type="text"
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default SearchBar;

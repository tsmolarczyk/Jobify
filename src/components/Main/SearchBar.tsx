import css from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={css.container}>
      <label className={css.search}>
        <div>
          <img
            className={css.img}
            src='./assets/images/search_icon.png'
            alt='search icon in searching bar'
          />
          <input className={css.input} placeholder='Job title or keyword' />
        </div>
        <button className={css.btn}>Search</button>
      </label>
    </div>
  );
};

export { SearchBar };

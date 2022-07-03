import css from './SearchBar.module.css';
import { MainBtn } from '../MainBtn/MainBtn';

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
          <input className={css.input} placeholder='Czego szukasz?' />
        </div>
        <MainBtn text='Wyszukaj' />
      </label>
    </div>
  );
};

export { SearchBar };

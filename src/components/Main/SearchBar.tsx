import css from './SearchBar.module.css';
import { BlueBtn } from '../BlueBtn';

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
        <BlueBtn text='Search' />
      </label>
    </div>
  );
};

export { SearchBar };

import css from './Hero.module.css';
import { SearchBar } from './SearchBar';

const Hero = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Find the right <br /> job that suits your needs
      </h1>
      <p className={css.para}>
        Finding a job shouldn’t be a full-time job. Tell us what you’re looking
        for and we’ll get to work for you.
      </p>
      <SearchBar />
      <img
        className={css.image}
        src='./assets/images/hero-img.png'
        alt='hero-img-main'
      ></img>
    </div>
  );
};

export { Hero };

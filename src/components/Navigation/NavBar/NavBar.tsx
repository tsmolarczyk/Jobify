import css from '../NavBar/NavBar.module.css';
import { MainBtn } from '../../MainBtn';
const NavBar = () => {
  return (
    <div className={css.container}>
      <img
        className={css.img}
        src='./assets/images/logo.png'
        alt='jobify-logo'
      />
      <div className={css.btns}>
        <button className={css.btn}>Przeszukaj oferty</button>
        <button className={css.btn}>Znajdź Startup</button>
        <button className={css.btn}>Zaloguj się</button>
        <MainBtn text='Zarejestruj się' />
        {/* <button className={css.signup}>Sign up</button> */}
      </div>
    </div>
  );
};
export { NavBar };

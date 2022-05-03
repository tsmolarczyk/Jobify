import css from '../NavBar/NavBar.module.css';
import { BlueBtn } from '../../BlueBtn';
const NavBar = () => {
  return (
    <div className={css.container}>
      <img
        className={css.img}
        src='./assets/images/logo.png'
        alt='jobify-logo'
      />
      <div className={css.btns}>
        <button className={css.btn}>Find Jobs</button>
        <button className={css.btn}>Browse Startups</button>
        <button className={css.btn}>Find Startups</button>
        <button className={css.btn}>Login</button>
        <BlueBtn text='Sign Up' />
        {/* <button className={css.signup}>Sign up</button> */}
      </div>
    </div>
  );
};
export { NavBar };

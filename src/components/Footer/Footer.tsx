import css from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={css.container}>
        <div className={css.logo}>
          <img
            className={css.img}
            src='./assets/images/logo.png'
            alt='jobify-logo'
          />
          <p className={css.para}>
            Szukanie pracy nie powinno być pracą na etacie. Powidz nam czego
            szukasz,a znajdziemy to dla Ciebie.
          </p>
        </div>
        <div className={css.seekers}>
          <h3 className={css.title}>Dla pracowników</h3>
          <ul className={css.list}>
            <li>Znajdź pracę</li>
            <li>Wynagrodzenie</li>
            <li>Karierea</li>
            <li>Profile firm</li>
            <li>Pomoc</li>
          </ul>
        </div>
        <div className={css.employers}>
          <h3 className={css.title}>Dla pracodawców</h3>
          <ul className={css.list}>
            <li>Produkty</li>
            <li>Rozwiązania</li>
            <li>Cennik</li>
            <li>Źródła</li>
          </ul>
        </div>
        <div className={css.resources}>
          <h3 className={css.title}>Pomocne źródła</h3>
          <ul className={css.list}>
            <li>Praca</li>
            <li>Rodzaje umów</li>
            <li>Prawa</li>
            <li>Prywatność</li>
          </ul>
        </div>
        <div className={css.social}>
          <h3 className={css.title}>Follow Us</h3>
          <div className={css.icons}>
            <a href='facebook.com'>
              <img
                src='./assets/images/facebook.png'
                alt='facebook-icon-in-social'
              />
            </a>
            <a href='instagram.com'>
              <img
                src='./assets/images/instagram.png'
                alt='instagram-icon-in-social'
              />
            </a>
            <a href='twitter.com'>
              <img
                src='./assets/images/twitter.png'
                alt='twitter-icon-in-social'
              />
            </a>
            <a href='linkedin.com'>
              <img
                src='./assets/images/linkedin.png'
                alt='linkedin-icon-in-social'
              />
            </a>
          </div>
        </div>
      </div>
      <div className={css.madeby}>©2022 Made by tsmolarczyk</div>
    </div>
  );
};

export { Footer };

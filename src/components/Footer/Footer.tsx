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
            Finding a job shouldn’t be a <br />
            full-time job. Tell us what you’re <br />
            looking for and we’ll get to work for you.
          </p>
        </div>
        <div className={css.seekers}>
          <h3 className={css.title}>For Job Seekers</h3>
          <ul className={css.list}>
            <li>Browse Jobs</li>
            <li>Salary</li>
            <li>Career Advice</li>
            <li>Company Profile</li>
            <li>Help</li>
          </ul>
        </div>
        <div className={css.employers}>
          <h3 className={css.title}>For Emplyers</h3>
          <ul className={css.list}>
            <li>Products</li>
            <li>Solution</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className={css.resources}>
          <h3 className={css.title}>Helpfull Resources</h3>
          <ul className={css.list}>
            <li>About Monster</li>
            <li>Work for Monster</li>
            <li>Terms of Use</li>
            <li>Privacy center</li>
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

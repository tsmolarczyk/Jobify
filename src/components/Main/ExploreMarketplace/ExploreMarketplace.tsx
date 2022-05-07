import css from './ExploreMarketplace.module.css';
import { JobOffer } from './JobOffer';
import { MainBtn } from '../../MainBtn';

const ExploreMarketplace = () => {
  return (
    <>
      <section className={css.container}>
        <h2 className={css.title}>Znajdź swoją ofertę</h2>
        <p className={css.para}>
          Szukanie pracy nie powinno być pracą na etacie. <br />
          Powiedz nam czego szukasz, a znajdziemy to dla Ciebie.
        </p>
        <div className={css.offers}>
          <JobOffer
            source='./assets/images/microsoft-logo.png'
            company='Microsoft'
            date='5 dni temu'
            title='Junior Marketing & Communication Manager'
            location='Warszawa'
            contract='Umowa o pracę'
          />
          <JobOffer
            source='./assets/images/paypal-logo.png'
            company='Paypal'
            date='2 dni temu'
            title='Bank Management'
            location='Kraków'
            contract='B2B'
          />

          <JobOffer
            source='./assets/images/nike-logo.png'
            company='Nike'
            date='tydzień temu'
            title='Senior Visual Designer'
            location='Katwice'
            contract='Umowa zlecenie'
          />
        </div>
        <MainBtn text='Więcej' />
      </section>
    </>
  );
};
export { ExploreMarketplace };

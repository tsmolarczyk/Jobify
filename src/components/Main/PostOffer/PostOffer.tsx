import { MainBtn } from '../../MainBtn';
import css from './PostOffer.module.css';
import { LoginForm } from '../LoginForm/LoginForm';
import { OfferForm } from '../OfferForm/OfferForm';

const PostOffer = () => {
  return (
    <div>
      <div className={css.container}>
        <img src='./assets/images/sitting-woman.png' alt='sitting-woman' />
        <div className={css.details}>
          <h2>Umieść swoją ofertę i znajdź pracowników</h2>
          <p>
            Zyskaj pracowników w mgnieniu oka. Zgłoszenia pierwszych kandydatów
            przychodzą zazwyczaj już po 10 minutach od publikacji oferty pracy.
          </p>
          <p>
            Umieść ofertę w jednej z największych sieci w Polsce. Znajdź
            najbardziej wykfalifikowanego pracownika. Zbuduj silną pozycję
            swoejej marki i zaprezentuj się potencjalnym Klientom.
          </p>
          <div className={css.btn}>
            <MainBtn text='Umieść ofertę' />
          </div>
        </div>
      </div>
      <OfferForm />
      <LoginForm />
    </div>
  );
};

export { PostOffer };

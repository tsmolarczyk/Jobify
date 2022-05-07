import { Input } from '../../Input/Input';
import { MainBtn } from '../../MainBtn';
import css from './OfferForm.module.css';

const OfferForm = () => {
  return (
    <>
      <form className={css.form}>
        <h3 className={css.title}>Daj się znaleźć</h3>
        <div className={css.inputs}>
          <label>
            <p className={css.para}>Nazwa firmy</p>
            <Input type='text' />
          </label>

          <label>
            <p className={css.para}>Stanowisko</p>
            <Input type='text' />
          </label>

          <label className={css.checkbox}>
            <p className={css.para}>Rodzaj umowy</p>
            <Input type='checkbox' />
            <Input type='checkbox' />
            <Input type='checkbox' />
          </label>

          <label>
            <p className={css.para}>Lokalizacja</p>
            <Input type='text' />
          </label>

          <label>
            <p className={css.para}>Opis</p>
            <Input type='text' />
          </label>
          <label className={css.checkbox}>
            <p className={css.para}>Benefity</p>
            <Input type='checkbox' />
            <Input type='checkbox' />
            <Input type='checkbox' />
          </label>
        </div>
        {/* czy tutaj mam dodac wrappera zeby nadac padding albo szerokosc albo w ogole jakis styl ?? */}
        <MainBtn text='Zamieść ofertę' />
      </form>
    </>
  );
};

export { OfferForm };

import { CompanyInput } from '../../CompanyInput/CompanyInput';
import { Input } from '../../Input/Input';
import { MainBtn } from '../../MainBtn';
import { TitleInput } from '../../TitleInput/TitleInput';
import css from './OfferForm.module.css';
import { useOfferForm } from './useOfferForm';

const OfferForm = () => {
  const {
    handleCompanyOnChange,
    handleTitleOnChange,
    form,
    postNewOffer,
    setForm,
  } = useOfferForm();

  return (
    <>
      <form className={css.form}>
        <h3 className={css.title}>Daj się znaleźć</h3>
        <div className={css.inputs}>
          <CompanyInput onChange={handleCompanyOnChange} value={form.company} />
          <TitleInput onChange={handleTitleOnChange} value={form.title} />

          <label className={css.checkbox}>
            <p className={css.para}>Rodzaj umowy</p>
            <Input type='checkbox' />
            <Input type='checkbox' />
            <Input type='checkbox' />
          </label>

          <label>
            <p className={css.para}>Lokalizacja</p>
            <Input
              onChange={(e) =>
                setForm((state) => ({ ...state, localization: e.target.value }))
              }
              type='text'
            />
          </label>

          <label>
            <p className={css.para}>Opis</p>
            <Input
              onChange={(e) =>
                setForm((state) => ({ ...state, description: e.target.value }))
              }
              type='text'
            />
          </label>
          <label className={css.checkbox}>
            <p className={css.para}>Benefity</p>
            <Input type='checkbox' />
            <Input type='checkbox' />
            <Input type='checkbox' />
          </label>
        </div>

        <MainBtn
          // form={form}
          onClick={postNewOffer}
          className={css.button}
          text='Zamieść ofertę'
        />
      </form>
    </>
  );
};

export { OfferForm };

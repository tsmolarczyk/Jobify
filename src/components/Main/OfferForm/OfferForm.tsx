import { CompanyInput } from '../../Input/CompanyInput/CompanyInput';
import { Input } from '../../Input/Input';
import { MainBtn } from '../../MainBtn';
import { TitleInput } from '../../Input/TitleInput/TitleInput';
import css from './OfferForm.module.css';
import { useOfferForm } from './useOfferForm';
import { LocalizationInput } from '../../Input/LocalizationInput/LocalizationInput';
import { DescriptionInput } from '../../Input/InputDescription/DescriptionInput';

const OfferForm = () => {
  const {
    handleCompanyOnChange,
    handleTitleOnChange,
    handleLocalizationOnChange,
    handleDescriptionOnChange,
    form,
    postNewOffer,
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

          <LocalizationInput
            onChange={handleLocalizationOnChange}
            value={form.localization}
          />

          <DescriptionInput
            onChange={handleDescriptionOnChange}
            value={form.description}
          />

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

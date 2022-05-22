import { useCallback, useState, ChangeEvent, MouseEvent } from 'react';

type FormData = {
  company: string;
  title: string;
  localization: string;
  description: string;
};

const useOfferForm = () => {
  const [form, setForm] = useState<FormData>({
    company: '',
    title: '',
    localization: '',
    description: '',
  });
  const handleCompanyOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setForm((state) => ({ ...state, company: e.target.value })),
    []
  );

  const handleTitleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setForm((state) => ({ ...state, title: e.target.value })),
    []
  );

  const handleLocalizationOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setForm((state) => ({ ...state, localization: e.target.value })),
    []
  );

  const handleDescriptionOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setForm((state) => ({ ...state, description: e.target.value })),
    []
  );

  const postNewOffer = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();

      const payload = {
        company: form.company,
        title: form.title,
        localization: form.localization,
        description: form.description,
      };

      console.log(payload);
    },
    [form.company, form.title]
  );

  return {
    postNewOffer,
    handleCompanyOnChange,
    handleTitleOnChange,
    handleLocalizationOnChange,
    handleDescriptionOnChange,
    form,
    setForm,
  };
};

export { useOfferForm };

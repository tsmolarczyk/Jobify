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
  const postNewOffer = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();

      const payload = {
        company: form.company,
        title: form.title,
      };

      console.log(payload);
    },
    [form.company, form.title]
  );

  return {
    postNewOffer,
    handleCompanyOnChange,
    handleTitleOnChange,
    form,
    setForm,
  };
};

export { useOfferForm };

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

  // function postNewJob(newJob) {
  //   fetch('http://localhost:4000/offers/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(newJob),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       state.jobs.push(data);
  //       console.log(state.jobs);
  //     });
  // setForm((state) => ({ ...state, localization: e.target.value }));
  // }

  // fetch('http://localhost:4000/offers/')
  //   .then((res) => res.json())
  //   .then((data) => setOffers((state) => ({ ...state, data })));

  const postNewOffer = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();

      // fetch('http://localhost:4000/offers/', { method: 'POST', body :JSON.stringify() })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     offer((state) => ({ ...state }));
      //     console.log(state.jobs);
      //   });

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

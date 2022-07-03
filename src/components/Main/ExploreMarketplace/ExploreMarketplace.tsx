import { useEffect, useState, useCallback } from 'react';

import { MainBtn } from '../../MainBtn/MainBtn';

import { JobOffer } from './JobOffer';
import css from './ExploreMarketplace.module.css';

type ResponseData = {
  data: {
    records: {
      title: string;
      company_city: string;
      categories: { id: number; name: string }[];
      company_name: string;
      date: string;
      description: string;
      duration: number;
      id: number;
      thumb: string;
      salary: {
        salary_from: number;
        salary_to: number;
        name: string;
      }[];
    }[];
  };
};

type Offer = {
  id: number;
  title: string;
  date: string;
  source: string;
  location: string;
  contracts: string[];
  company: string;
};

const formatDate = (str: string) => {
  const date = new Date(str);

  return `${Math.abs(
    Math.floor((date.getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24)
  )} dni temu`;
};

const mapResponse = (response: ResponseData): Offer[] => {
  return response.data.records.map((record) => ({
    title: record.title,
    date: formatDate(record.date),
    id: record.id,
    source: record.thumb,
    location: record.company_city,
    contracts: record.salary.map(({ name }) => name),
    company: record.company_name,
  }));
};

const ExploreMarketplace = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loaded, setLoaded] = useState<Boolean>(false);

  const fetchOffers = useCallback(async () => {
    const url = 'http://localhost:4000/offers/';
    const res = await fetch(url);
    const data = await res.json();
    setOffers(mapResponse(data));
    setLoaded(true);
  }, []);

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  return (
    <section className={css.container}>
      <h2 className={css.title}>Znajdź swoją ofertę</h2>
      <p className={css.para}>
        Szukanie pracy nie powinno być pracą na etacie. <br />
        Powiedz nam czego szukasz, a znajdziemy to dla Ciebie.
      </p>
      {!loaded && <h1>LADOWANIE</h1>}
      <div className={css.offers}>
        {offers.map((offer) => (
          <JobOffer
            key={offer.id}
            source='./assets/images/microsoft-logo.png'
            company={offer.company}
            date={offer.date}
            title={offer.title}
            location={offer.location}
            contract={offer.contracts.join(', ')}
          />
        ))}
      </div>
      <MainBtn text='Więcej' />
    </section>
  );
};
export { ExploreMarketplace };

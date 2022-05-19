import css from './ExploreMarketplace.module.css';
import { JobOffer } from './JobOffer';
import { MainBtn } from '../../MainBtn';
import { useEffect, useState } from 'react';

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

  return `${
    ((date.getTime() - new Date().getTime()) / 1000 / 3600) * 24
  } dni temu`;
};

const mapResponse = (response: ResponseData): Offer[] => {
  return response.data.records.map((record) => ({
    title: record.title,
    date: formatDate(record.date),
    id: record.id,
    source: record.thumb,
    location: record.company_city,
    contracts: record.salary.map(({ name }) => name), // .map() [1, 2, 3].map(i => i * 2) -> [2, 4, 6],
    company: record.company_name,
  }));
};

const ExploreMarketplace = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  console.log(offers);

  useEffect(() => {
    const fetchOffers = async () => {
      fetch('http://localhost:4000/offers/')
        .then((res) => res.json()) // async/await -> zamienic na te forme, poczytac
        .then((data: ResponseData) => setOffers(mapResponse(data)));
    };

    fetchOffers();
  }, []);

  // warunkowe renderowanie
  // Loading...

  return (
    <>
      <section className={css.container}>
        <h2 className={css.title}>Znajdź swoją ofertę</h2>
        <p className={css.para}>
          Szukanie pracy nie powinno być pracą na etacie. <br />
          Powiedz nam czego szukasz, a znajdziemy to dla Ciebie.
        </p>
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
    </>
  );
};
export { ExploreMarketplace };

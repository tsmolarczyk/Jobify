import css from './JobOffer.module.css';

type Props = {
  source: string;
  company: string;
  date: string;
  title: string;
  location: string;
  contract: string;
};

const JobOffer = ({
  source,
  company,
  date,
  title,
  location,
  contract,
}: Props) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img className={css.img} alt={'company-logo'} src={source} />
        <div className={css.main}>
          <div className={css.company}>{company}</div>
          <div className={css.date}>{date}</div>
        </div>
      </div>
      <h2 className={css.title}>{title}</h2>
      <div className={css.details}>
        <div className={css.location}>
          <img src='./assets/images/location-icon.png' alt='location-icon' />
          {location}
        </div>
        <div className={css.contract}>
          <img src='./assets/images/contract-icon.png' />
          {contract}
        </div>
      </div>
    </div>
  );
};
export { JobOffer };

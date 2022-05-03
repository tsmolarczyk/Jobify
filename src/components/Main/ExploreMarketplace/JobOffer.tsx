import css from './JobOffer.module.css';

type Props = {
  company?: string;
  title?: string;
  source: string;
  location?: string;
  date?: string;
};

const JobOffer = ({ source, company, title, location, date }: Props) => {
  return (
    <div>
      <div className={css.container}>
        <div className={css.wrapper}>
          <img src={source} />
          <div>
            <div>{company}</div>
            <div>{date}</div>
          </div>
        </div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};
export { JobOffer };

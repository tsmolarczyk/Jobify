import css from './JobTraining.module.css';

const JobTraining = () => {
  return (
    <div className={css.container}>
      <h2>Rozwijaj siebie i swoją karierę</h2>
      <p>
        Zapisz się na szkolenia i podnieś swoje kompetencje. <br />
        Stań się profesjonalistą, który wyróżnia się na tym konkurencyjnym rynku
        pracy.
      </p>
      <button>Znajdź szkolenie</button>
    </div>
  );
};
export { JobTraining };

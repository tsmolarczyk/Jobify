import { parseDate } from 'components/utils';
import css from './DateComponent.module.css';

type Props = {
  date: Date;
};

const DateComponent = ({ date }: Props) => {
  const parsedDate = parseDate(date);

  return (
    <div className={css.container}>
      <h1>Data wydarzenia: </h1>
      <p>{parsedDate}</p>
    </div>
  );
};

export { DateComponent };

// 1. Przetestuj funkcje (zwroc uwage na edge kejsy)
// 2. Napisz komponent, który wyswietla date z propsa <Date date={new Date} />
// 3. Zamockuj tak parseDate zeby zawsze zwracala "Ala ma kota"
// 4. Przetestuj input (test czy wyswietla sie error, czy wykonuje sie onChange na kazdym wpisaniu czegos)
// 5. Przeczytaj o jest.mock oraz jest.fn()

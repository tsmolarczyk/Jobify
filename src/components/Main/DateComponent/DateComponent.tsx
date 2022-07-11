import { parseDate } from 'components/utils';
import css from './DateComponent.module.css';
import { Input } from 'components/Input/Input';

type Props = {
  date: Date;
};

const DateComponent = ({ date }: Props) => {
  const parsedDate = parseDate(date);

  return (
    <div className={css.container}>
      <h1>Data wydarzenia: </h1>
      <p>{parsedDate}</p>
      <Input
        onChange={(e) => {
          debugger;
        }}
        type='text'
        value='value'
        placeholder='someInput'
      />
    </div>
  );
};

export { DateComponent };

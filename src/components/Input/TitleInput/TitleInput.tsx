import { ChangeEvent, memo } from 'react';
import css from './TitleInput.module.css';
import { Input } from '../Input';

type Props = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
const TitleInput = memo(({ onChange, value }: Props) => {
  return (
    <label>
      <p className={css.para}>Stanowisko</p>
      <Input onChange={onChange} value={value} type='text' />
    </label>
  );
});

export { TitleInput };

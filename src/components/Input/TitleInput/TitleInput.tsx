import css from './TitleInput.module.css';
import { Input } from '../Input';
import { ChangeEvent, memo } from 'react';

type Props = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
const TitleInput = memo(({ onChange, value }: Props) => {
  console.log('title render');
  return (
    <label>
      <p className={css.para}>Stanowisko</p>
      <Input onChange={onChange} value={value} type='text' />
    </label>
  );
});

export { TitleInput };

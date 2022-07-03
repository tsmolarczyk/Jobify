import { ChangeEvent, memo } from 'react';
import { Input } from '../Input';
import css from './CompanyInput.module.css';

type Props = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const CompanyInput = memo(({ onChange, value }: Props) => {
  return (
    <label>
      <p className={css.para}>Nazwa firmy</p>
      <Input onChange={onChange} value={value} type='text' />
    </label>
  );
});

export { CompanyInput };

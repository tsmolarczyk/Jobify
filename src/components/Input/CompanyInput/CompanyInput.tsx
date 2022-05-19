import css from './CompanyInput.module.css';
import { Input } from '../Input';
import { ChangeEvent, memo } from 'react';

type Props = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const CompanyInput = memo(({ onChange, value }: Props) => {
  console.log('company render');
  return (
    <label>
      <p className={css.para}>Nazwa firmy</p>
      <Input onChange={onChange} value={value} type='text' />
    </label>
  );
});

export { CompanyInput };

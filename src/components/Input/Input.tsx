import css from './Input.module.css';
import { ChangeEvent } from 'react';

type Props = {
  placeholder: string;
  value: string;
  typ: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ placeholder, value, typ, onChange }: Props) => {
  return (
    <>
      <input
        className={css.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={typ}
      />
      {/* {error && <span>{error}</span>} */}
    </>
  );
};

export { Input };

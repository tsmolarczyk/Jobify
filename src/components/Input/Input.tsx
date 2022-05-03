import css from './Input.module.css';
import { ChangeEvent } from 'react';

type Props = {
  placeholder: string;
  value: string;
  typ: string;
  onChaange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ placeholder, value, typ, onChaange }: Props) => {
  return (
    <>
      <input
        className={css.input}
        placeholder={placeholder}
        value={value}
        onChange={onChaange}
        type={typ}
      />
      {/* {error && <span>{error}</span>} */}
    </>
  );
};

export { Input };

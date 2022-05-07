import css from './Input.module.css';
import { ChangeEvent } from 'react';
import cn from 'classnames';

type Props = {
  placeholder?: string;
  value?: string;
  type: 'password' | 'text' | 'email' | 'checkbox';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string | boolean;
};

const Input = ({
  placeholder,
  value,
  type,
  onChange,
  onBlur,
  error,
}: Props) => {
  const classNames = cn(css.input, {
    [css.wrong]: !!error,
  });

  return (
    <>
      <input
        className={classNames}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      />
      {error && <span>{error}</span>}
    </>
  );
};

export { Input };

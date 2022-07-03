import { ChangeEvent, memo } from 'react';
import { Input } from '../Input';

type Props = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const LocalizationInput = memo(({ onChange, value }: Props) => {
  return (
    <label>
      <p>Lokalizacja</p>
      <Input type='text' value={value} onChange={onChange} />
    </label>
  );
});

export { LocalizationInput };

import { ChangeEvent, memo } from 'react';
import { Input } from '../Input';

type Props = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const DescriptionInput = memo(({ onChange, value }: Props) => {
  return (
    <label>
      <p>Opis</p>
      <Input type='text' value={value} onChange={onChange} />
    </label>
  );
});

export { DescriptionInput };

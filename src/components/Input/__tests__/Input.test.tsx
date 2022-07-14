import React, { useState, ChangeEvent } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../Input';

const Wrapper = ({ onChange }: { onChange: (value: string) => void }) => {
  const [state, setState] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setState(value);
    onChange(value);
  };

  return (
    <Input
      onChange={handleChange}
      type='text'
      value={state}
      placeholder='someInput'
      error={state.length === 0 ? 'error' : ''}
    />
  );
};

// used wrapper to check whole sentence

describe('Input', () => {
  test('if input runs onChange when writing', () => {
    const onChange = jest.fn();
    const text = 'This is a good example of input';

    render(<Wrapper onChange={onChange} />);

    const inputField = screen.getByRole('textbox');

    userEvent.type(inputField, text);

    expect(onChange).toHaveBeenCalledWith(text);
    expect(inputField).toHaveAttribute('value', text);
  });

  test('if error is displayed', () => {
    const onChange = jest.fn();

    render(
      <Input
        onChange={onChange}
        type='text'
        value='value'
        placeholder='someInput'
        error='error'
      />
    );

    const error = screen.getByText('error');

    expect(error).toBeTruthy();
  });
});

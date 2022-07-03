import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MainBtn } from '../MainBtn';

describe('Main Btn', () => {
  test('if button has proper text', () => {
    const text = 'Tomasz';
    render(<MainBtn text={text} />);

    const btn = screen.getByRole('button');

    // const btn = screen.getByText(text)
    expect(btn).toHaveTextContent(text);
    // expect(btn).toBeTruthy()
  });

  test('if button clicked run function', () => {
    const onClick = jest.fn();

    render(<MainBtn onClick={onClick} text='text' />);

    const btn = screen.getByRole('button');

    userEvent.click(btn);

    expect(onClick).toHaveBeenCalled();
  });
});

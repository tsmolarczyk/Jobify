import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '../SearchBar';

describe('SearchBar', () => {
  test('if input has placeholder', () => {
    render(<SearchBar />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('placeholder', 'Czego szukasz?');
  });
});

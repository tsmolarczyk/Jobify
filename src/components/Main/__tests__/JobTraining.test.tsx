import React from 'react';
import { render, screen } from '@testing-library/react';
import { JobTraining } from '../JobTraining/JobTraining';

describe('JobTraining', () => {
  test('if renders text for header', () => {
    render(<JobTraining />);

    const header = screen.getByRole('heading');

    expect(header).toHaveTextContent('Rozwijaj siebie i swoją karierę');
  });
});

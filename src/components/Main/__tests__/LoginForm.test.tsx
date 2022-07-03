import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginForm } from '../LoginForm/LoginForm';

describe('LoginForm', () => {
  test('if login form returns form', () => {
    render(<LoginForm />);

    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
  });
});

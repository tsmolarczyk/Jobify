import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from '../Main';
import userEvent from '@testing-library/user-event';

jest.mock('../ExploreMarketplace/ExploreMarketplace', () => ({
  ExploreMarketplace: () => <div />,
}));

jest.mock('../PostOffer/PostOffer', () => ({
  PostOffer: () => <div />,
}));

jest.mock('../JobTraining/JobTraining', () => ({
  JobTraining: () => <div />,
}));

const Hero = ({ setNumber }: { setNumber: () => void }) => {
  return <button onClick={setNumber}>klik</button>;
};

jest.mock('../Hero/Hero', () => ({
  Hero,
}));

jest.mock('../DateComponent/DateComponent', () => ({
  DateComponent: () => <>{'Ala ma kota'}</>,
}));

describe('Main', () => {
  test('if login form returns form', () => {
    render(<Main />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);

    const txt = screen.getByText('Number: 2');
    expect(txt).toBeInTheDocument();
  });
});

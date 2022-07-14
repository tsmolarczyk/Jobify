import React from 'react';
import { render, screen } from '@testing-library/react';
import { parseDate } from '../../../utils';
import { DateComponent } from '../DateComponent';

const actual = jest.requireActual('../DateComponent');

jest.mock('../DateComponent', () => ({
  DateComponent: jest.fn(),
}));

describe('DateTest', () => {
  test('if date is parsing properly in months 1-9', () => {
    const firstDate = new Date('August 9, 1975 23:15:30');
    expect(parseDate(firstDate)).toBe('1975-08-09');

    const secondDate = new Date('October 16, 1994 16:00:00');
    expect(parseDate(secondDate)).toBe('1994-10-16');
  });

  test('check if dateComponent mock works', () => {
    (DateComponent as jest.Mock).mockImplementation(actual.DateComponent);

    render(<DateComponent date={new Date('1935-10-19')} />);

    const text = screen.getByText(/1935-10-19/);

    // expect(text).toBeTruthy();
    expect(text).toHaveTextContent('1935-10-19');
  });

  test('check if dateComponent mock is working', () => {
    (DateComponent as jest.Mock).mockImplementation(() => {
      return <>{'ala ma kota'}</>;
    });

    render(
      <DateComponent date={new Date('August 19, 1935 23:15:30 GMT+00:00')} />
    );

    const text = screen.getByText(/ala ma kota/i);

    expect(text).toBeTruthy();
  });
});

// jest.fn()
// .mockReturnValue, mockImplementation, .resetMock, .clearAllMocks,

// it('works with resolves', () => {
//   expect.assertions(1);
//   return expect(user.getUserName(5)).resolves.toEqual('Paul');
// });

// https://github.com/jest-community/jest-extended#toresolve

// ./testSetup.js

// add all jest-extended matchers
// import * as matchers from 'jest-extended';
// expect.extend(matchers);

// // or just add specific matchers
// import { toBeArray, toBeSealed } from 'jest-extended';
// expect.extend({ toBeArray, toBeSealed });

// // 1

// I don't think jest natively supports this. However, the jest-extended library (community managed extensions) does with #toResolve()

// await expect(foo()).toResolve()
// Jest devs discuss the request here and refer us to jest-extended

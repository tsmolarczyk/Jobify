import React from 'react';
const { parseDate } = require('./utils');

describe('DateTest', () => {
  test('if date is parsing properly', () => {
    const myFirstDate = new Date('August 19, 1975 23:15:30');
    expect(parseDate(myFirstDate)).toBe('1975-8-19');

    const mySecondDate = new Date('October 16, 1994 16:00:00');
    expect(parseDate(mySecondDate)).toBe('1994-10-16');
  });
});

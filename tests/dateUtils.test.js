const { parseDate } = require('../src/utils/dateUtils');

describe('parseDate', () => {
  it('should parse a valid date string', () => {
    const validDateString = '2024-11-07';
    const expectedResult = {
      day: 7,
      month: 11,
      year: 2024,
    };

    const result = parseDate(validDateString);

    expect(result).toEqual(expectedResult);
  });

  it('should throw an error for Invalid date format', () => {
    const invalidDateString = 'invalid-date';

    expect(() => parseDate(invalidDateString)).toThrow('Invalid date format');
  });

  it('should throw an error for missing components', () => {
    const missingComponentsDateString = '2024-';

    expect(() => parseDate(missingComponentsDateString)).toThrow(
      'Invalid date format'
    );
  });

  it('should throw an error for invalid month value', () => {
    const invalidMonthDateString = '2023-13-22';

    expect(() => {
      parseDate(invalidMonthDateString);
    }).toThrow('Invalid month value');
  });

  it('should throw an error for invalid day value', () => {
    const invalidDayDateString = '2023-11-32';

    expect(() => {
      parseDate(invalidDayDateString);
    }).toThrow('Invalid day value');
  });

  it('should handle leap year correctly', () => {
    const leapYearDateString = '2024-02-29';
    const expectedResult = {
      day: 29,
      month: 2,
      year: 2024,
    };

    const result = parseDate(leapYearDateString);

    expect(result).toEqual(expectedResult);
  });

  it('should handle non-leap year February correctly', () => {
    const nonLeapYearDateString = '2023-02-29';

    expect(() => {
      parseDate(nonLeapYearDateString);
    }).toThrow('Invalid day value');
  });
});

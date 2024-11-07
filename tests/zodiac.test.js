const { getZodiacSignByDate } = require('../src/services/zodiacService');

describe('getZodiacSignByDate', () => {
  it('should return correct zodiac sign for a given date', async () => {
    const date = { year: 2000, month: 1, day: 1 };
    const zodiacSign = await getZodiacSignByDate(date);

    expect(zodiacSign).toBe('Capricorn');
  });

  it('should handle invalid dates', async () => {
    const invalidDate = 'invalid-date';

    await expect(getZodiacSignByDate(invalidDate)).rejects.toThrow();
  });
});

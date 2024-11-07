const horoscope = require('horoscope');

const getZodiacSignByDate = async (date) => {
  return horoscope.getSign(date);
};

module.exports = { getZodiacSignByDate };

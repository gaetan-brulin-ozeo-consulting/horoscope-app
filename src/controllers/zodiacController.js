const zodiacService = require('../services/zodiacService');
const { parseDate } = require('../utils/dateUtils');

const getZodiacSign = async (req, res) => {
  const birthdate = req.query.birthdate;

  if (!birthdate) {
    return res.status(400).json({ error: 'Birthdate is required' });
  }

  try {
    const parsedBirthdate = parseDate(birthdate);
    const zodiacSign = await zodiacService.getZodiacSignByDate(parsedBirthdate);

    res.json({ zodiac_sign: zodiacSign });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getZodiacSign };

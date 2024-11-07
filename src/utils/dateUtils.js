const parseDate = (dateString) => {
  const dateParts = dateString.split('-');

  if (dateParts.length !== 3) {
    throw new Error('Invalid date format');
  }

  const [year, month, day] = dateParts.map(Number);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error('Invalid date format');
  }

  if (month < 1 || month > 12) {
    throw new Error('Invalid month value');
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    throw new Error('Invalid day value');
  }

  return {
    day,
    month,
    year,
  };
};

module.exports = { parseDate };

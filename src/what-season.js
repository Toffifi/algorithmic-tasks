module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  }
  try {
    date.toLocaleDateString();
  } 
  catch {
    throw new Error();
  }
  if(date instanceof Date) {
    const month = date.getMonth() + 1;
    if(month <= 2 || month === 12) {
      return 'winter';
    } else if(month > 2 && month <= 5) {
      return 'spring';
    } else if(month > 5 && month <= 8) {
      return 'summer';
    } else {
      return 'autumn';
    }
  } else {
    throw new Error();
  }
};
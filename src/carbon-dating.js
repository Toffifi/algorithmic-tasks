const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity)!= 'string') {
    return false;
  }
  const activity = parseFloat(sampleActivity);
  return isNaN(activity) ||  activity <= 0 || activity > 15 ? false : Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
};
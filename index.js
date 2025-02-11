/**
 * Get a future UNIX timestamp by adding seconds.
 * @param {number} seconds Number of seconds to add.
 * @returns {number} Future UNIX timestamp.
 */
function unixTimeInSeconds(seconds) {
  return Math.floor(Date.now() / 1000) + seconds;
}

/**
 * Get a future UNIX timestamp by adding minutes.
 * @param {number} minutes Number of minutes to add.
 * @returns {number} Future UNIX timestamp.
 */
function unixTimeInMinutes(minutes) {
  return unixTimeInSeconds(minutes * 60);
}

/**
 * Get a future UNIX timestamp by adding hours.
 * @param {number} hours Number of hours to add.
 * @returns {number} Future UNIX timestamp.
 */
function unixTimeInHours(hours) {
  return unixTimeInMinutes(hours * 60);
}

/**
 * Get a future UNIX timestamp by adding days.
 * @param {number} days Number of days to add.
 * @returns {number} Future UNIX timestamp.
 */
function unixTimeInDays(days) {
  return unixTimeInHours(days * 24);
}

module.exports = {
  unixTimeInSeconds,
  unixTimeInMinutes,
  unixTimeInHours,
  unixTimeInDays,
};

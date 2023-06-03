/**
 * The formattedDate function takes a date object and returns a string of the date in the MM/DD/YYYY format.
 *
 * @param { Date } date - The date to be formatted.
 * @returns { String } The formatted date string in MM/DD/YYYY format.
 */
export const formattedDate = (date) => {
  const newDate = new Date(date),
      month = '' + (newDate.getMonth() + 1),
      day = '' + newDate.getDate(),
      year = newDate.getFullYear();

  return [ month.padStart(2, '0'), day.padStart(2, '0'), year ].join('/');
};

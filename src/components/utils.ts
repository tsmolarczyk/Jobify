export const parseDate = (date: Date) => {
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
    '0' + date.getDate()
  ).slice(-2)}`;

  // YYYY-MM-DD 2021-03-05
};

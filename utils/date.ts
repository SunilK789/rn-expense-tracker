export const getFormattedDate = (date: Date) => {
  return date
    ? `${date?.getFullYear()}-${date?.getMonth() + 1}-${date?.getDate()}`
    : null;
};

export const getDateMinusDays = (date: Date, day: number) => {
  return date
    ? new Date(date?.getFullYear(), date?.getMonth(), date?.getDate() - day)
    : null;
};

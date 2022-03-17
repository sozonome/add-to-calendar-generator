export const getLocaleTimeString = (date?: Date | string) => {
  return `${new Date(date || new Date())
    .toISOString()
    .substring(0, 10)}T${new Date()
    .toLocaleTimeString("EN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .substring(0, 5)}`;
};

export const trimmedIsoString = (date: Date | string) =>
  new Date(date).toISOString().replace(/[-//:]+/g, "");

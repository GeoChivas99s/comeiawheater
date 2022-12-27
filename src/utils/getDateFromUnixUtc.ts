export const getDateFromUnixUtc = (value: number) => {
  const date = new Date(value * 1000).toLocaleString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZoneName: "longOffset",
    timeZone: "UTC",
  });
  const dateString = date.replace("GMT", "");
  return dateString;
};

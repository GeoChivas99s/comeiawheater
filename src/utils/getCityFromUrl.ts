const getCityFromUrl = (url: string) => {
  const path = url.split("/").reverse()[0];
  return path;
};

export default getCityFromUrl;

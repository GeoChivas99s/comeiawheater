const getCityFromUrl = () => {
  const path = document.location.pathname.split("/").reverse()[0];
  return path;
};

export default getCityFromUrl;

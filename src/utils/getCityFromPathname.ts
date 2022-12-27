const getCityFromPathname = (url: string) => {
  const path = url.split("/").reverse()[0].split('?')[0];
  
  return path;
};

export default getCityFromPathname;

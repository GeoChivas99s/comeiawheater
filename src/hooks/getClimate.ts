import axios from "axios";

const getClimate = async (requestBody: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}?q=${requestBody}&appid=${process.env.REACT_APP_API_KEY}`
  );
  return  response ;
};

export default getClimate;
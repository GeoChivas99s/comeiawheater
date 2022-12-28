import { useApiGetClimate } from "services/useApiGetCityWeather";
import { MOCK } from "constants/MOCK_DATA_SERVICE-London";
const axios = require("axios");
jest.mock("axios");

const makeSut = () => ({
  sut: useApiGetClimate,
});



describe(useApiGetClimate.name, () => {
  test("shloud be return data when value is London", () => {
    const { sut } = makeSut();
    axios.get.mockResolvedValue(MOCK);
    const result = sut("London");
    expect(result).toBe(MOCK);
  });
});

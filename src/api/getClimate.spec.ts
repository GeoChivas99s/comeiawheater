import { MOCK_DATA } from "constants/MOCK_DATA-London";
import getClimate from "./getClimate";
const axios = require("axios");
jest.mock("axios");

const makeSut = () => ({
  sut: getClimate,
});

describe(getClimate.name, () => {
  test("should fetch London weather", async () => {
    const { sut } = makeSut();
    axios.get.mockResolvedValue(MOCK_DATA);

    const result = await sut("London");
    expect(result).toBe(MOCK_DATA);
  });
});

import { useApiGetClimate } from "services/useApiGetCityWeather";

const makeSut = () => ({
  sut: useApiGetClimate,
});



describe(useApiGetClimate.name, () => {
  test("shloud be return data when value is London", () => {
    // const { sut } = makeSut();
    // const result = sut("London");
    // expect(result).toBe(MOCK);
  });
});

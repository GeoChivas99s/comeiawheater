import getCityFromPathname from "utils/getCityFromPathname";

const makeSut = () => ({
  sut: getCityFromPathname,
});

describe(getCityFromPathname.name, () => {
  test("should return Fairbanks from /city/Fairbanks", () => {
    const { sut } = makeSut();
    const result = sut("/city/Fairbanks");
    expect(result).toBe("Fairbanks");
  });

  test("should return London from /city/London?pageSize=12&pageNumber", () => {
    const { sut } = makeSut();
    const result = sut("/city/London?pageSize=12&pageNumber");
    expect(result).toBe("London");
  });

  test("should return UK from /city/London/UK?pageSize=12&pageNumber", () => {
    const { sut } = makeSut();
    const result = sut(" /city/London/UK?pageSize=12&pageNumber");
    expect(result).toBe("UK");
  });

  test("should return empty string", () => {
    const { sut } = makeSut();
    const result = sut("");
    expect(result).toBe("");
  }) ;
});

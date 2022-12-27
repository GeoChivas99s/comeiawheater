import { getDateFromUnixUtc } from "utils/getDateFromUnixUtc";

const makeSut = () => ({
  sut: getDateFromUnixUtc,
});

describe(getDateFromUnixUtc.name , ()=>{
  test('should return ', ()=>{
    const {sut}= makeSut();
    const result = sut(1672171117);
    expect(result).toBe("7:54 PM");

  })
})

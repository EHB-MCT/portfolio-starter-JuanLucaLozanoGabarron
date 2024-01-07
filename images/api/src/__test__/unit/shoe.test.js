const checkShoeInput = require("./../helpers/checkShoe");

describe("Shoe input validation", () => {
  test("Should validate the inputs", () => {
    expect(checkShoeInput({ brand: "", model: "", img: "" })).toBe(false);
    expect(checkShoeInput({ brand: null, model: null, img: null })).toBe(false);
    expect(
      checkShoeInput({ brand: undefined, model: undefined, img: undefined })
    ).toBe(false);
    expect(
      checkShoeInput({ brand: "Nike", model: "Air Force 1", img: "testimg" })
    ).toBe(true);
  });
});

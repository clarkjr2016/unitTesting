import { capitalize } from "./unitTests";

test("Capitalizes eugene to Eugene", () => {
  expect(capitalize("eugene")).toBe("Eugene");
});

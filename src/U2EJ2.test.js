import '@testing-library/jest-dom';
import { tests } from '../U2/U2EJ2';
describe("tests", () => {
  let classTest = tests();
  test('checks if Triangle is a class',() => {
    expect(typeof(classTest)).toBe("function");
  });
  test('checks if the Triangle\'s constructor has base and height',() => {
    expect(classTest.toString().indexOf("constructor")).toBeGreaterThan(0);
    expect(classTest.toString().indexOf("this.base")).toBeGreaterThan(0);
    expect(classTest.toString().indexOf("this.height")).toBeGreaterThan(0);
  });
});

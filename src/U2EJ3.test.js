import '@testing-library/jest-dom';
import { tests } from '../U2/U2EJ3';
describe("tests", () => {
  let classTest = tests()[0];
  test('checks if Triangle is a class',() => {
    expect(typeof(classTest)).toBe("function");
  });
  test('checks if the Triangle\'s constructor has base and height',() => {
    expect(classTest.toString().indexOf("constructor")).toBeGreaterThan(0);
    expect(classTest.toString().indexOf("this.base")).toBeGreaterThan(0);
    expect(classTest.toString().indexOf("this.height")).toBeGreaterThan(0);
  });
  test('checks that finally myTriangle1 is a Triangle that its base equals 10 and its heigth equals 7', () => {
    expect(typeof(tests()[1])).toBe("object");
    expect(tests()[1].base).toBe(10);
    expect(tests()[1].height).toBe(7);
  });
  test('checks that finally myTriangle2 is a Triangle that its base equals 5 and its heigth equals 7', () => {
    expect(typeof(tests()[2])).toBe("object");
    expect(tests()[2].base).toBe(5);
    expect(tests()[2].height).toBe(7);
  });
  test('checks that AreaMyTriangle1 is 35', () => {
    expect(tests()[3]).toBe(35);
  });
  test('checks that AreaMyTriangle2 is 17.5', () => {
    expect(tests()[4]).toBe(17.5);
  });
});

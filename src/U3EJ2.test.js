import '@testing-library/jest-dom';
import { tests } from '../U3/U3EJ2';
describe("tests", () => {
  let Triangle = tests();
  const myTriangle1 = new Triangle(10, 5, true);
  const myTriangle2 = new Triangle(15, 7, false);
  test('checks if Triangle is a class',() => {
    expect(typeof(Triangle)).toBe("function");
  });
  test('checks if the Triangle\'s class has a property named [rightTriangle]',() => {
    expect(Triangle.toString().indexOf("rightTriangle")).toBeGreaterThan(0);
    expect(myTriangle1.rightTriangle).toBe(true);
    expect(myTriangle2.rightTriangle).toBe(false);
  });
  test('checks if the Triangle\'s class has a getter named areaTriangle',() => {
    expect(Triangle.toString().indexOf("areaTriangle")).toBeGreaterThan(0);
    expect(myTriangle1.areaTriangle).toBe(25);
    expect(myTriangle2.areaTriangle).toBe(52.5);
  });
  test('checks if the Triangle\'s class has a getter named rightHypotenuse',() => {
    expect(Triangle.toString().indexOf("rightHypotenuse")).toBeGreaterThan(0);
    expect(parseInt(myTriangle1.rightHypotenuse)).toBe(11);
    expect(myTriangle2.rightHypotenuse).toBe(undefined);
  });
  test('checks if the Triangle\'s class has a getter named rightPerimeter',() => {
    expect(Triangle.toString().indexOf("rightPerimeter")).toBeGreaterThan(0);
    expect(parseInt(myTriangle1.rightPerimeter)).toBe(26);
    expect(myTriangle2.rightPerimeter).toBe(undefined);
  });
});

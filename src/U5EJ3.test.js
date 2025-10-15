import '@testing-library/jest-dom';
import { tests } from '../U5/U5EJ3';
describe("tests", () => {
  let Triangle = tests();
const myEquilateral = new Triangle(10, 10*Math.sqrt(3)/2, false);
const myTriangle1 = new Triangle(10, 5, true);
const myTriangle2 = new Triangle(15, 7, true);
  test('checks if Triangle is a class',() => {
    expect(typeof(Triangle)).toBe("function");
  });
  test('checks if the Triangle\'s class has a property named [rightTriangle]',() => {
    expect(Triangle.toString().indexOf("rightTriangle")).toBeGreaterThan(0);
    expect(myTriangle1.rightTriangle).toBe(true);
    expect(myTriangle2.rightTriangle).toBe(true);
  });
  test('checks if the Triangle\'s class has a getter named areaTriangle',() => {
    expect(Triangle.toString().indexOf("areaTriangle")).toBeGreaterThan(0);
    expect(myTriangle1.areaTriangle).toBe(25);
    expect(myTriangle2.areaTriangle).toBe(52.5);
  });
  test('checks if the Triangle\'s class has a getter named rightHypotenuse',() => {
    expect(Triangle.toString().indexOf("rightHypotenuse")).toBeGreaterThan(0);
    expect(parseInt(myTriangle1.rightHypotenuse)).toBe(11);
    expect(parseInt(myTriangle2.rightHypotenuse)).toBe(16);
  });
  test('checks if the Triangle\'s class has a getter named rightPerimeter',() => {
    expect(Triangle.toString().indexOf("rightPerimeter")).toBeGreaterThan(0);
    expect(parseInt(myTriangle1.rightPerimeter)).toBe(26);
    expect(parseInt(myTriangle2.rightPerimeter)).toBe(38);
  });
  test('checks if the Triangle\'s class has a method named rightTriangleUnion',() => {
    expect(Triangle.toString().indexOf("rightTriangleUnion")).toBeGreaterThan(0);
    expect(parseInt(Triangle.rightTriangleUnion(myTriangle1, myTriangle2))).toBe(66);
  });
  test('checks if the Triangle\'s class has a method named areaPoligon',() => {
    expect(Triangle.toString().indexOf("areaPoligon")).toBeGreaterThan(0);
    expect(parseInt(Triangle.areaPoligon([myEquilateral, myTriangle1, myTriangle2]))).toBe(120);
  });
  test('checks if the Triangle\'s class has a method named isEquilateral',() => {
    expect(Triangle.toString().indexOf("isEquilateral")).toBeGreaterThan(0);
    expect(myEquilateral.isEquilateral()).toBe(true);
  });
});

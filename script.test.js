const fizzBuzz = require('./script');

test('returns Fizz for multiples of 3 or numbers containing 3', () => {
  expect(fizzBuzz(3)).toBe("FizzFizz");
  expect(fizzBuzz(6)).toBe("Fizz");
  expect(fizzBuzz(13)).toBe("Fizz");
});

test('returns Buzz for multiples of 5 or numbers containing 5', () => {
  expect(fizzBuzz(5)).toBe("BuzzBuzz");
  expect(fizzBuzz(10)).toBe("Buzz");
  expect(fizzBuzz(52)).toBe("Buzz");
});

test('returns FizzBuzz for numbers satisfying both Fizz and Buzz rules', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzzBuzz");
  expect(fizzBuzz(53)).toBe("FizzBuzz");
  expect(fizzBuzz(35)).toBe("FizzBuzzBuzz");
});

test('returns the number for non-FizzBuzz numbers', () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(7)).toBe(7);
});

test('returns Pop for even numbers', () => {
  expect(fizzBuzz(2, true)).toBe("Pop");
  expect(fizzBuzz(4, true)).toBe("Pop");
  expect(fizzBuzz(10, true)).toBe("BuzzPop");
  expect(fizzBuzz(30, true)).toBe("FizzFizzBuzzPop");
});
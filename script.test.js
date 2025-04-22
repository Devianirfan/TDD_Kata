const fizzBuzz = require('./script');

test('returns Fizz for multiples of 3 or numbers containing 3', () => {
  expect(fizzBuzz(3)).toBe("FizzFizz"); // Divisible by 3 and contains 3
  expect(fizzBuzz(6)).toBe("Fizz"); // Divisible by 3
  expect(fizzBuzz(13)).toBe("Fizz"); // Contains 3
});

test('returns Buzz for multiples of 5 or numbers containing 5', () => {
  expect(fizzBuzz(5)).toBe("BuzzBuzz"); // Divisible by 5 and contains 5
  expect(fizzBuzz(10)).toBe("Buzz"); // Divisible by 5
  expect(fizzBuzz(52)).toBe("Buzz"); // Contains 5
});

test('returns FizzBuzz for numbers satisfying both Fizz and Buzz rules', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzzBuzz"); // Divisible by 3 and 5, contains 5
  expect(fizzBuzz(53)).toBe("FizzBuzz"); // Contains 3 and 5
  expect(fizzBuzz(35)).toBe("FizzBuzzBuzz"); // Contains 3 and 5, divisible by 5
});

test('returns the number for non-FizzBuzz numbers', () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(7)).toBe(7);
});
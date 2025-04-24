// FizzBuzz program

function fizzBuzz(n, enablePop = false) {
  let result = "";

  if (n % 3 === 0) {
    result += "Fizz";
  }
  result += n.toString().split("").filter((num) => num === "3").map(() => "Fizz").join("");

  if (n % 5 === 0) {
    result += "Buzz";
  }
  result += n.toString().split("").filter((num) => num === "5").map(() => "Buzz").join("");

  if (enablePop && n % 2 === 0) {
    result += "Pop"; // <- Only when explicitly enabled
  }
    
  return result || n;

}

module.exports = fizzBuzz;

// for (let i = 1; i <= 100; i++) {
//   console.log(fizzBuzz(i));
// }
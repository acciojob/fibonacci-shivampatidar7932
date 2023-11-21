const fibonacci = (num) => {
  // (Same fibonacci function code as before)

  if (num <= 0) {
    return "Invalid input. Please provide a positive integer.";
  } else if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  }

  let prev = 0;
  let current = 1;

  for (let i = 3; i <= num; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }

  return current;
};

let userInput = prompt("Enter a positive integer:");
userInput = parseInt(userInput, 10);

if (isNaN(userInput) || userInput <= 0) {
  console.log("Invalid input. Please provide a positive integer.");
} else {
  const result = fibonacci(userInput);
  console.log(`The ${userInput}-th Fibonacci number is: ${result}`);
}

module.exports = fibonacci;

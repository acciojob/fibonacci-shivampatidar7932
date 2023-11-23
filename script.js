function fibonacci(num) {
    if (num <= 0) {
        return "Input should be a positive integer greater than 0";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        let a = 0, b = 1;
        for (let i = 3; i <= num; i++) {
            let temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }
}

// Take user input
let userInput = prompt("Enter a positive integer: ");
let num = parseInt(userInput);

// Check if the input is a valid positive integer
if (Number.isNaN(num) || num <= 0) {
    alert("Invalid input. Please enter a positive integer greater than 0.");
} else {
    // Call the fibonacci function and display the result using alert
    alert(`The ${num}th Fibonacci number is: ${fibonacci(num)}`);
}

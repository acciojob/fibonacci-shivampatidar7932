function fibonacci(num) {
    if (num <= 0) {
        console.log("Invalid input. Please provide a positive integer.");
        return -1; // or throw an exception for invalid input
    }

    // Initialize the first two Fibonacci numbers
    let fibSequence = [0, 1];

    // Generate the Fibonacci sequence up to the num-th term
    for (let i = 2; i <= num; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    // Return the num-th Fibonacci number
    return fibSequence[num];
}

module.exports = fibonacci;

// Exercise 2
// Use a for loop to iterate a count from 0 to 4 and log each iteration.
// Add a continue statement to skip the iteration if the iteration is 2.

// Your code here
for (let variableName = 0; variableName < 5; variableName++) {
  if (variableName === 2) {
    continue;
  }
  console.log('Iteration ' + variableName);
}
// Expected Output:
// Iteration 0
// Iteration 1
// Iteration 3
// Iteration 4




// In the terminal, copy & paste the code below and run it to see the result in the console.

// node 02_ControlFlow/14_Loop_Control_Statements/02_continue_Statement.js
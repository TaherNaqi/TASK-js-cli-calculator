const prompt = require("prompt-sync")(); // Please don't touch me :)
while (true) {
  // The prompt method allows us to take an input from the user.
  // Run the code to see how to use prompt.
  var number1 = prompt("Type the first number: ");
  if (number1 == "#") {
    break;
  }
  if (isNaN(number1)) {
    console.log("Not valid input");
    continue;
  }

  var number2 = prompt("Type the second number: ");
  if (number2 == "#") {
    break;
  }
  if (isNaN(number2)) {
    console.log("Not valid input");
    continue;
  }

  number1 = parseInt(number1);
  number2 = parseInt(number2);

  let result = 0;

  const operation = prompt("Type the operation: ");
  if (operation == "#") {
    break;
  }

  if (
    operation == "+" ||
    operation == "-" ||
    operation == "*" ||
    operation == "/"
  ) {
    if (operation == "+") {
      result = number1 + number2;
    } else if (operation == "-") {
      result = number1 - number2;
    } else if (operation == "/") {
      result = number1 / number2;
    } else if (operation == "*") {
      result = number1 * number2;
    }

    console.log("result is " + result);
  } else {
    console.log("You have entered incorrect operation");
  }
}

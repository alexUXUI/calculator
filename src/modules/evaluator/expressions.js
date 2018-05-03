export const generateExpression = (numbers, operations) => {
  var expression = [];
  for(var i = 0; i < numbers.length; i++){
      expression.push(numbers[i]);
      expression.push(operations[i]);
  }
  return expression.join('');
}

export const evaluateExpression = expression => {

  var chars = expression.split("");
  var numbers = [], 
  op = [], 
  index = 0, 
  oplast = true;

  numbers[index] = "";

  // Parse the expressionession
  for (var c = 0; c < chars.length; c++) {

      if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
          op[index] = chars[c];
          index++;
          numbers[index] = "";
          oplast = true;
      } else {
          numbers[index] += chars[c];
          oplast = false;
      }
  }

  // Calculate the expressionession
  expression = parseFloat(numbers[0]);
  for (var o = 0; o < op.length; o++) {
      var num = parseFloat(numbers[o + 1]);
      switch (op[o]) {
          case "+":
              expression = expression + num;
              break;
          case "-":
              expression = expression - num;
              break;
          case "*":
              expression = expression * num;
              break;
          case "/":
              expression = expression / num;
              break;
      }
  }

  return expression;
}



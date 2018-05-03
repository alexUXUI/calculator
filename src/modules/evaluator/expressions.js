export const evaluateExpression = (numbers, operations) => {
  const expression = []
  for(let i = 0; i < numbers.length; i++){
      expression.push(numbers[i])
      expression.push(operations[i])
  }
  expression.pop()
  return eval(expression.join(''))
}

import Store from '../../store/store.dev'

// number acitons
export const selectNumber = number => ({
    type: 'keyboard/SELECT_NUMBER',
    value: number
})

export const submitNumber = () => ({
    type: 'keyboard/SUBMIT_NUMBER',
    value: null,
})

// operation actions
export const selectOperator = operator => async (dispatch) => {
    await dispatch(submitNumber())
    await dispatch({
        type: 'keyboard/SELECT_OPERATOR',
        value: operator
    })
    await dispatch({
        type: 'keyboard/CANT_SELECT_OPERATOR',
        value: null
    })
}

export const submitOperator = operator => ({
    type: 'keyboard/SUBMIT_OPERATOR',
    value: operator
})

// calculator state acitons
export const clearCalculatorState = () => ({
    type: 'calculator/CLEAR_STATE',
    value: null
})

export const calculateExpression = () => {

    const { calculator } = Store.getState()
    const { numbers, operations } = calculator

    function generateExpression(numbers, operations){
        var expression = [];
        for(var i = 0; i < numbers.length; i++){
            expression.push(numbers[i]);
            expression.push(operations[i]);
        }
        return expression.join('');
    }

    return {
        type: 'calculator/CALCULATE_EXPRESSION',
        value: evaluateExpression(generateExpression(numbers, operations))
    }
}

function evaluateExpression (expr) {

    var chars = expr.split("");
    var n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    // Parse the expression
    for (var c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }

    // Calculate the expression
    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "*":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
        }
    }

    return expr;
}



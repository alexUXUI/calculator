const calcState = {
    currentNumber: '',
    numbers: [],
    operations: [],
    inputMode: 'number',
    expression: ``,
    expressionValue: 0,
}

export default function (state, action) {
    switch (action.type) {
    case 'keyboard/SELECT_NUMBER':
        return {
            ...state,
            currentNumber: action.value,
            inputMode: 'number'
        }

    case 'keyboard/SUBMIT_NUMBER':
        return {
            ...state,
            numbers: state.numbers.concat(state.currentNumber),
            inputMode: 'operation',
            currentNumber: ''
        }

    case 'keyboard/SELECT_OPERATOR':
        return {
            ...state,
            operations: state.operations.concat(action.value),
            inputMode: 'number'
        }

    case 'calculator/CALCULATE_EXPRESSION':
        return {
            ...state,
            expressionValue: action.value
        }

    case 'keyboard/CANT_SELECT_OPERATOR':
        return {
            ...state,
        }
    
    case 'calculator/CLEAR_STATE':
        return {
            ...calcState,
        }


    default:
        return calcState;
    }
}
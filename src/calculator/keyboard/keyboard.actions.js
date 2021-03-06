import { evaluateExpression } from '../../modules/evaluator/expressions'
import Store from '../../store/store.dev'
import { OPERATORS } from '../../modules/constants/ui.constants'

/**
 * This is kind of the app kernel in the sense that it looks for input and decides what to do based on:
 * - key or click event, number, operator, evaluator, clear state
 */
export const handleUserInput = event => dispatch => {
    event.persist()

    const { currentNumber } = Store.getState().calculator
    const { key, target } = event
    const value = key ? key : target.innerHTML
    
    if (Number.parseInt(value) || value === '0' || value === '.') dispatch(selectNumber(currentNumber.toString() + value))
    if (OPERATORS.includes(value)) dispatch(selectOperator(value))
    if (value === '=' || value === 'Enter' ) dispatch(calculateExpression())
    if (value === 'Escape' || value === 'AC') dispatch(clearCalculatorState())
}

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
export const selectOperator = operator => dispatch => {
    dispatch(submitNumber())
    dispatch({
        type: 'keyboard/SELECT_OPERATOR',
        value: operator
    })
    dispatch({
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
    return {
        type: 'calculator/CALCULATE_EXPRESSION',
        value: evaluateExpression(numbers, operations)
    }
}
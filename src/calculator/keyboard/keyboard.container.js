
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'

import { 
    selectNumber, 
    selectOperator, 
    submitNumber, 
    clearCalculatorState,
    submitOperator,
    calculateExpression
} from './keyboard.actions'

import './keyboard.css'
import { CALCULATOR_BUTTONS, OPERATORS } from '../../modules/ui.constants'

const Keyboard = (props) => {

    function handleUserInput (event) {
        event.persist()

        const { key, target } = event
        const { selectNumber, selectOperator, calculateExpression, currentNumber, clearCalculatorState } = props
        
        /**
         * This block looks for the following:
         * - key or click event
         * - number
         * - operator
         * - evaluator
         * - clear state / exit
         */

        const value = key ? key : target.innerHTML

        if (Number.parseInt(value)) selectNumber(currentNumber.toString() + value)
        if (OPERATORS.includes(value)) selectOperator(value)
        if (value === '=') calculateExpression()
        if (value === 'Escape' || value === 'AC') clearCalculatorState()
    }

    const renderKeyboardButtons = () => 
        CALCULATOR_BUTTONS.map(button => 
            <button className='keyboard--button' key={uuidv1()}>
                { button }
            </button>
        )

    return (
        <div className="calc">
            <div 
                tabIndex="1" 
                onKeyDown={event => handleUserInput(event)}
                onClick={event => handleUserInput(event)}
                className='calc--keyboard'
            >
                {renderKeyboardButtons()}
            </div>    
        </div>
    )
}

const mapStateToProps = state => ({
    currentNumber: state.calculator.currentNumber,
    inputMode: state.calculator.inputMode,
    numbers: state.calculator.numbers,
    operations: state.calculator.operations
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    selectNumber,
    selectOperator,
    submitNumber,
    clearCalculatorState,
    calculateExpression,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)
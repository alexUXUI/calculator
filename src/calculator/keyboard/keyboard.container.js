
import React from 'react'
import uuidv1 from 'uuid/v1'
import { connect } from 'react-redux'

import { 
    selectNumber, 
    selectOperator, 
    submitNumber, 
    clearCalculatorState,
    submitOperator,
    calculateExpression
} from './keyboard.actions'

import './keyboard.css'

const operators = ['+','-','*','/','%', '=', '+/-']
const calculatorButtons = ['AC', '+/-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '|', '=']

class Keyboard extends React.Component {
    componentWillUpdate(props, nextProps) {
        // console.log('component will update: props | next props', JSON.stringify(props), JSON.stringify(nextProps))
    }

    constructor(props) {
        super(props)
        this.state = {
            operators: operators,
            calculatorButtons: calculatorButtons,
        }
    }

    handleUserInput (event) {
        event.persist()

        const { key, target } = event
        const { operators } = this.state
        const { 
            selectNumber, 
            selectOperator, 
            calculateExpression, 
            currentNumber,
            clearCalculatorState 
        } = this.props
        
        // key or click event
        const value = key ? key : target.innerHTML

        // number
        if (Number.parseInt(value)) {
            selectNumber(currentNumber.toString() + value)
        }

        // operator
        if (operators.includes(value)) {
            selectOperator(value)
        }
        
        // evaluator
        if (value === '=') {
            calculateExpression()
        }

        // clear state
        if (value === 'Escape' || value === 'AC') {
            clearCalculatorState()
        }
    }

    render() {
        return (
            <div className="calc">
                <div 
                    tabIndex="1" 
                    onKeyDown={event => this.handleUserInput(event)}
                    onClick={event => this.handleUserInput(event)}
                    className='calc--keyboard'
                >
                    {
                        this.state.calculatorButtons.map(button => 
                            <button 
                                className='keyboard--button'
                                key={uuidv1()}
                            >
                                { button }
                            </button>
                        )
                    }
                </div>    
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentNumber: state.calculator.currentNumber,
    inputMode: state.calculator.inputMode,
    numbers: state.calculator.numbers,
    operations: state.calculator.operations
})

const mapDispatchToProps = dispatch => ({
    selectNumber: (key) => dispatch(selectNumber(key)),
    selectOperator: (value) => dispatch(selectOperator(value)),
    submitNumber: () => dispatch(submitNumber()),
    clearCalculatorState: () => dispatch(clearCalculatorState()),
    calculateExpression: () => dispatch(calculateExpression()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)
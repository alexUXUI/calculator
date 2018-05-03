import React from 'react'
import { connect } from 'react-redux'
import Keyboard from './keyboard/keyboard.container';
import Screen from './screen/screen.component';
import './calculator.css'

const Calculator = props => {

    const { expressionValue, currentNumber } = props

    return (
        <div className="calc">
            <Screen 
                currentNumber={currentNumber}
                expressionValue={expressionValue}
            />
            <Keyboard />
        </div>
    )
}

const mapStateToProps = state => ({
    currentNumber: state.calculator.currentNumber,
    expressionValue: state.calculator.expressionValue,
})

export default connect(mapStateToProps, null)(Calculator)
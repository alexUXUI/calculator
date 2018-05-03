import React from 'react'
import { connect } from 'react-redux'
import Keyboard from './keyboard/keyboard.container';
import Screen from './screen/screen.component';
import './calculator.css'

const Calculator = props => (
    <div 
        className="calc"
    >
        <Screen 
            currentNumber={props.currentNumber}
            expressionValue={props.expressionValue}
        />
        <Keyboard/>
    </div>
)

const mapStateToProps = ({calculator}) => ({
    currentNumber: calculator.currentNumber,
    expressionValue: calculator.expressionValue,
})

export default connect(mapStateToProps, null)(Calculator)
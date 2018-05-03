import React from 'react'
import { connect } from 'react-redux'
import Keyboard from './keyboard/keyboard.container';
import Screen from './screen/screen.container';
import './calculator.css'

const Calculator = props => {
    return (
        <div className="calc">
            <Screen currentNumber={props.currentNumber}/>
            <Keyboard />
        </div>
    )
}

const mapStateToProps = state => ({
    currentNumber: state.calculator.currentNumber
})

export default connect(mapStateToProps, null)(Calculator)
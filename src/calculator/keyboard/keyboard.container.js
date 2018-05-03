
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'

import { handleUserInput } from './keyboard.actions'

import { CALCULATOR_BUTTONS } from '../../modules/constants/ui.constants'
import './keyboard.css'

const Keyboard = (props) => {

    const { handleUserInput } = props

    function handleInput (event) {
        return handleUserInput(event)
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
                ref={calc => calc && calc.focus()}
                tabIndex="1" 
                onKeyDown={handleInput}
                onClick={handleInput}
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

const mapDispatchToProps = dispatch => bindActionCreators({
    handleUserInput
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)
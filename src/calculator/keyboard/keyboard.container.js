import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'

import { handleUserInput } from './keyboard.actions'

import { CALCULATOR_BUTTONS, OPERATORS, OPERATOR_TYPES, OTHER_BUTTON_TYPES } from '../../modules/constants/ui.constants'
import './keyboard.css'

const Keyboard = (props) => {

    const { handleUserInput } = props

    const handleInput = event => {
        return handleUserInput(event)
    }

    const renderKeyboardButtons = () => 
        CALCULATOR_BUTTONS.map(button => {
            if (OPERATOR_TYPES.includes(button)) { // all other buttons
                return (
                    <button className='keyboard--button keyboard--button__operation' key={uuidv1()}>
                       { button }
                    </button>
                )
            } else if (OTHER_BUTTON_TYPES.includes(button)) { // operator buttons
                return (
                    <button className='keyboard--button keyboard--button__etc' key={uuidv1()}>
                     { button }
                    </button>
                )
            } else if (typeof Number.parseFloat(button) === 'number' || button === '.') { // number buttons
                return (
                    <button className='keyboard--button keyboard--button__number' key={uuidv1()}>
                        { button }
                    </button>
                )
            }
        })

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

const mapDispatchToProps = dispatch => bindActionCreators({
    handleUserInput
}, dispatch)

export default connect(null, mapDispatchToProps)(Keyboard)
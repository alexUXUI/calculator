import React from 'react'
import './screen.css'
import { connect } from 'react-redux'

const Screen = props => {

    const { expressionValue, currentNumber } = props

    // Is there a calculated expression value? If so, show result
    const displayInputOrOutput = () => expressionValue ? expressionValue : currentNumber

    return (
        <div className='screen'>
            <span className="screen--number">
                { displayInputOrOutput() }
            </span>
        </div>   
    )
}

export default Screen
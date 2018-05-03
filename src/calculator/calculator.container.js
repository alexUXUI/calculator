import React from 'react'
import { connect } from 'react-redux'
import Keyboard from './keyboard/keyboard.container';
import Screen from './screen/screen.container';
import './calculator.css'

class Calculator extends React.Component {

    componentWillUpdate(props, nextProps) {
        // console.log('ayyye', JSON.stringify(props), JSON.stringify(nextProps))
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="calc">
                <Screen currentNumber={this.props.currentNumber}/>
                <Keyboard />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentNumber: state.calculator.currentNumber
    }
}

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps, {})(Calculator)
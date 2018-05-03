import React from 'react'
import './screen.css'
import { connect } from 'react-redux';

class Screen extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillUpdate(props, nextProps) {
        // console.log('screen component will update: props | next props', JSON.stringify(props), JSON.stringify(nextProps))
    }

    render() {
        return (
            <div className='screen'>
                <span className="screen--number">
                    { 
                        this.props.expressionValue 
                            ? this.props.expressionValue 
                            : this.props.currentNumber
                     }
                </span>
                </div>   
        )
    }
}

const mapStateToProps = state => ({
    expressionValue: state.calculator.expressionValue
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, {})(Screen)
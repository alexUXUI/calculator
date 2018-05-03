import { combineReducers } from 'redux';
import calculator from '../calculator/calculator.reducer'
import keyboard from '../calculator/keyboard/keyboard.reducer'

const allReducers = combineReducers({
  calculator: calculator,
  keyboard: keyboard
})

export default allReducers
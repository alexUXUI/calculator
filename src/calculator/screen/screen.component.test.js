import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Screen from './screen.component'

enzyme.configure({ adapter: new Adapter() });

describe('Screen tests', () => {

    let component
    
    beforeEach(() => {
        component = mount(
          <Screen />
        )
    })

    it("It should render without throwing an error", () => {
        expect(component.exists()).toBe(true)
    })
    
    it("It should show the right text", () => {
      expect(component.text()).toBe('')
    })
    
    it("It should have the correct markup", () => {
      const SCREEN_HTML = `<div class="screen"><span class="screen--number"></span></div>`
      expect(component.html()).toBe(SCREEN_HTML)
    })
})

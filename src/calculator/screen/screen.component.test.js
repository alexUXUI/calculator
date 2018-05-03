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

    it("should render without throwing an error", () => {
        expect(component.exists()).toBe(true)
    })
    
    it("should show the right text", () => {
      expect(component.text()).toBe('')
    })
    
    it("It should be wrapped in a provider", () => {
      const SCREEN_HTML = `<div class="screen"><span class="screen--number"></span></div>`
      expect(component.html()).toBe(SCREEN_HTML)
    })
})

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import enzyme, { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import Store from '../../store/store.dev'
import Keyboard from './keyboard.container'

enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('Calc tests', () => {

    let component
    
    beforeEach(() => {
        component = mount(
            <Provider store={Store}>
                <Keyboard />
            </Provider>
        )
    })

    it("should render without throwing an error", () => {
        expect(component.exists()).toBe(true)
    })
    
    it("should show the right text on the buttons", () => {
        expect(component.text()).toBe('AC+/-%/789*456-123+0.=')
    })
    
    it("It should be wrapped in a provider", () => {
        expect(component.type()).toBe(Provider)
    })
})


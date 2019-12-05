// Test away!
import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display';

//tests if rendered correctly
test('it renders correctly', () => {
    render(<Display />);
});
//tests that it should match snapshot
test('should match snapshot', () => {
    expect(render(<Display />)).toMatchSnapshot();
});
//displays if gate is open/closed and if it is locked/unlocked
//displays 'Closed' if the closed prop is true and 'Open' if otherwise
//displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
//when locked or closed use the red-led class
//when unlocked or open use the green-led class
describe('Displays buttons of gate', () => {
    it('displays unlocked, open', () => {
        const {getByText} = render(<Display />);
        expect(getByText("Unlocked"));
        expect(getByText("Open"));
    })
    it('displays locked, closed', () => {
        const {getByText} = render(<Display locked ={true} closed ={true} />);
        expect(getByText("Locked"));
        expect(getByText("Closed"));
    })
})

// Test away!

//step 1: mock function in jest
//step 2: queryByText 
//step 3: call variable to be false or true
//step 4: repeat
//step 5: fire event
//step 6: call mock function

import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';

//tests if rendered correctly
test('it renders correctly', () => {
    render(<Controls />);
});
//tests that it should match snapshot
test('should match snapshot', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

// defaults to unlocked and open
describe('Controls work', () => {
it('defaults to unlocked and open', () => {
    const mock = jest.fn();
    // provide buttons to toggle the closed and locked states.
     const {queryByText} = render(<Controls locked={false} closed={false} toggleClosed={mock}/>)
     // buttons' text changes to reflect the state the door will be in if clicked
     const lockButton = queryByText("Lock Gate");
     // the locked toggle button is disabled if the gate is open
     expect(lockButton.disabled).toBe(true)
     const closeButton = queryByText("Close Gate");
    // the closed toggle button is disabled if the gate is locked
     expect(closeButton.disabled).toBe(false)
     fireEvent.click(closeButton);
     expect(mock).toBeCalled()
     })
//cannot be closed or opened if it is locked
it("can't be closed or open when locked", () => {
    const mock = jest.fn();
      // provide buttons to toggle the closed and locked states.
    const {queryByText} = render(<Controls locked={true} closed={true} toggleLocked={mock} />)
    // buttons' text changes to reflect the state the door will be in if clicked
    const unlockButton = queryByText("Unlock Gate");
    expect(unlockButton.disabled).toBe(false)
    const openButton =  queryByText("Open Gate");
    expect(openButton.disabled).toBe(true)
    fireEvent.click(unlockButton);
    expect(mock).toBeCalled();
});
});

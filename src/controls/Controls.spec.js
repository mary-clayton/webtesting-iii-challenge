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
test('defaults to unlocked and open', () => {
    const mock = jest.fn();
     const {queryByText} = render(<Controls locked={false} closed={false} toggleClosed={mock}/>)
     const lockButton = queryByText("Lock Gate");
     expect(lockButton.disabled).toBe(true)
     const closeButton = queryByText("Close Gate");
     expect(closeButton.disabled).toBe(false)
     fireEvent.click(closeButton);
     expect(mock).toBeCalled()
     })
//cannot be closed or opened if it is locked
it("can't be closed or open when locked", () => {
    const mock = jest.fn();
    const {queryByText} = render(<Controls locked={true} closed={true} toggleLocked={mock} />)
    const unlockButton = queryByText("Unlock Gate");
    expect(unlockButton.disabled).toBe(false)
    const openButton =  queryByText("Open Gate");
    expect(openButton.disabled).toBe(true)
    fireEvent.click(unlockButton);
    expect(mock).toBeCalled();
});

import React from 'react';
// incorporate react-testing
import { render, cleanup} from '@testing-library/react';
    // render: What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
    // cleanup:  used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
// import jest-dom package. 
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// ensure that after each test, we wont have any leftover memory data that could give a false result.
afterEach(cleanup);

// use describe() to declare hte component we're testing 
describe('About component', () => {
    // First test
    it('renders', () => { //  can be written test('renders', ()...)
        render(<About />)
    });

    // Second test; test case: compare snapshot versions of the DOM node structure
        // Snapshot is a serialized version of of the DOM node structure, by jest. 
    it('matches snapshot DOM node structure', () => {
        // asFragment returns a snapshot of the Abouta component 
        const { asFragment } = render(<About />);
        
        // compare whether the expected and actual outcomes match 
        expect(asFragment()).toMatchSnapshot();
    });
});


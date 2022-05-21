import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup} from '@testing-library/react';
import Contact from '..';


afterEach(cleanup);

describe('Contact form renders', () => {
    it('renders', () => {
        render(<Contact />);
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('h1 should say `Contact Me`', () => {
        const { getByTestId } = render(<Contact />);

        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    })

    it('button should say `Submit`', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('btn')).toHaveTextContent('Submit');
    })
})
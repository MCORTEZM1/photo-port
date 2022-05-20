import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup} from '@testing-library/react';
import Gallery from '..';

// Gallery requires prop of currentCategory. This is a mock up of that
const portrait = { name: 'portraits', description: 'Portraits of people in my life'};

afterEach(cleanup);

describe('Gallery is rendering', () => {
    
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    })
    
    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders', () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />);
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    })

});
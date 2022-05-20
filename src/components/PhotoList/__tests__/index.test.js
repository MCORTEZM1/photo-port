import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup} from '@testing-library/react';
import PhotoList from '..';

afterEach(cleanup);

const currentCategory = { name: 'Food', description: 'Food examples'};

describe('PhotoList is rendering', () => {
 
    it('renders', () => {
        render(<PhotoList />)
    })

    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });

    // can test for name of key as image.name
});
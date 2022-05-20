import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup} from '@testing-library/react';
import Nav from '..';

// set up test to handle props 
const categories =[
    { name: 'portraits', description: 'Portraits of people in my life'}
];

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();


// configure testing environment

// 1.) cleanup statement
afterEach(cleanup);

// 2.) describe function to declare what this test suite is testing
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    }); 

    it('matches snapshot', () => {
        const { asFragment } = 
            render(<Nav  
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
            />);

        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', ()=> {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = 
            render(<Nav  
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
            />);
    
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸') 
    });
});

describe('links are visible', ()=> {
    // each it statement signifies a single test case
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = 
            render(<Nav  
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
            />);

        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});

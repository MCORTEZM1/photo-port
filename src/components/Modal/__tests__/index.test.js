import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent} from '@testing-library/react';
import Modal from '..';


const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};


afterEach(cleanup);

const mockToggleModal = jest.fn();


describe('Modal renders', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} />)
        expect(asFragment()).toMatchSnapshot();
    });
});


describe('Click Events', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal 
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

        fireEvent.click(getByText('Close'));

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
});
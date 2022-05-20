import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

const categories = [
    {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { 
        name: 'portraits', 
        description: 'Portraits of people in my life' 
    },
    { 
        name: 'food', 
        description: 'Delicious delicacies'
    },
    {
        name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
    },
];


function Nav() { 
    function categorySelected(name) {
        console.log(`${name} clicked`);
    }

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href='/'>
                    <span role='img' aria-label='camera'>📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'> 
                        <a href='#about'>
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* You should always only return a single JSX element, like a REACT component. */}
                    {categories.map((category) => (
                        <li
                            className='mx-1'
                            // object keys and primary/foreign keys used to uniquely 
                            // identify properties or items in a database
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)} >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
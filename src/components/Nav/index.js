import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) { 
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    // first argument is call back function
    // second argument directs the hook to re-render the component on changes to the value of this state.
    // i.e if currentCategory changes, the component will be re-rendered so the changes to document.title will be seen.
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a data-testid="link" href='/'>
                    <span role='img' aria-label='camera'>📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'> 
                        <a data-testid='about' href='#about'>
                            About me
                        </a>
                    </li>
                    <li className='mx-2'>
                        <span>Contact</span>
                    </li>
                    {/* You should always only return a single JSX element, like a REACT component. */}
                    {categories.map((category) => (
                        <li
                            // currentCategory.name === category.name will get evaluated, and as long as it is true, then the second bit of the short circuit, navActive, will be returned.
                            className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`}
                            // object keys and primary/foreign keys used to uniquely identify properties or items in a database
                            key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category)
                            }} >
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
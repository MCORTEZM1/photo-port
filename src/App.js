import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';


function App() {
  // lifted categories from Nav to app, to pass as props to components.
  const [categories] = useState([
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
]);

const [ currentCategory, setCurrentCategory ] = useState(categories[0]); 

  // returns JSX; which can represent HTML in javascript. consider it as document.createElement(JSX) behind the scenes. 
  return (
    // must always return a single JSX element, however this element may have many children
    <div>
      <Nav 
        // pass category as prop to Nav component. New props cause components to re-render.
        categories= {categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <ContactForm />
        <Gallery  
          currentCategory={currentCategory}
        />
        <About />
      </main>
    </div>
  );
}

export default App;

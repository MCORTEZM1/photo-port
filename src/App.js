import React from 'react';
import Nav from './components/Nav';
import About from './components/About';


function App() {
  // returns JSX; which can represent HTML in javascript.
  // consider it as document.createElement(JSX) behind the scenes. 
  return (
    // must always return a single JSX element, however this element may have many children
    <div>
      <Nav></Nav>
      <main>
        <About/>
      </main>
    </div>
  );
}

export default App;

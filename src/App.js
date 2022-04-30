//------------------------------------------------------------------------------
//-- IMPORTS
import React, { useState } from 'react';
import {  BrowserRouter, Route, Routes, useParams } from 'react-router-dom';

//------------------------------------------------------------------------------
//-- COMPONENTS
import Header from './components/header';
import Footer from './components/footer';

//------------------------------------------------------------------------------
//-- PAGES
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';


//------------------------------------------------------------------------------
//-- App Function
export default function App({ uuidv4 }) {
    
  //----------------------------------------------------------------------------
  //-- STATES
  
  const [locations, setLocations] = useState({ //-- Components within the main element. State is managed by Navigation and Routing.
    'about':    { name:'about',     subComponent:{About},    key:uuidv4(), jsx: <About    uuidv4={uuidv4}>  </About>    },
    'resume':   { name:'resume',    subComponent:{Resume},   key:uuidv4(), jsx: <Resume   uuidv4={uuidv4}>  </Resume>   },
    'projects': { name:'projects',  subComponent:{Projects}, key:uuidv4(), jsx: <Projects uuidv4={uuidv4}>  </Projects> },
    'contact':  { name:'contact',   subComponent:{Contact},  key:uuidv4(), jsx: <Contact  uuidv4={uuidv4}>  </Contact>  },
  });

  const [ location, setLocation ] = useState( 'about' ); //-- setting default location to About. Used by Nav for location awareness

  //----------------------------------------------------------------------------
  //-- Return Function
  return (
    <>
      <BrowserRouter basename="/">
        <Header
          key={uuidv4()} uuidv4={uuidv4} 
          locations={locations} setLocations={setLocations}
          location={location} setLocation={setLocation}
        ></Header>
        <main>
          <Routes>
            <Route exact path="/" element={locations['about'].jsx}/>
            <Route exact path="/about" element={locations['about'].jsx}/>
            <Route exact path="/resume" element={locations['resume'].jsx}/>
            <Route exact path="/projects" element={locations['projects'].jsx}/>
            <Route exact path="/contact" element={locations['contact'].jsx}/>            
            <Route path='/404' element={<PageNotFound     location={location} setLocation={setLocation}/>}/>
            <Route exact path="*" element={<PageNotFound  location={location} setLocation={setLocation}/>}/>
          </Routes>
        </main>
        <Footer key={uuidv4()} uuidv4={uuidv4}></Footer>
      </BrowserRouter>
    </>
  );
};
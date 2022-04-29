//-- Layer 2: ROOT ELEMENT MANAGING CONTENT AND UI
import React, { useState } from 'react';


//-- Header component that contains nav sub-component
import Header from './components/header';

//-- Main component with sub-components ( Importing subs here vs in main to allow for just 1 locations state obj )
import Main   from './components/main';
import AboutMe from './components/main/about-me';
import Projects from './components/main/projects';
import Resume from './components/main/resume';
import Contact from './components/main/contact';

//-- Footer component
import Footer from './components/footer';


export default function App({ uuidv4 }) {
  // <script src="https://www.google.com/recaptcha/api.js" async defer></script>
     
  

  //-- Sub-Components within the main container and also used for navigation
  const [locations, setLocations] = useState({
    'about':     { name:'about',      subComponent:{AboutMe},    key:uuidv4(), jsx: <AboutMe   uuidv4={uuidv4}></AboutMe>   },
    'resume':    { name:'resume',     subComponent:{Resume},     key:uuidv4(), jsx: <Resume    uuidv4={uuidv4}></Resume>    },
    'projects': { name:'projects',  subComponent:{Projects},  key:uuidv4(), jsx: <Projects uuidv4={uuidv4}></Projects> },
    'contact':   { name:'contact',    subComponent:{Contact},    key:uuidv4(), jsx: <Contact   uuidv4={uuidv4}></Contact>   },
  });

  //-- setting default location to about me
  const [ location, setLocation ] = useState( 'about' );
    
  //-- Returning all content
  return ([  
    <Header key={uuidv4()} uuidv4={uuidv4} locations={locations} setLocations={setLocations} location={location} setLocation={setLocation}></Header>,
    <Main   key={uuidv4()} uuidv4={uuidv4} locations={locations} setLocations={setLocations} location={location} setLocation={setLocation}></Main>,
    <Footer key={uuidv4()} uuidv4={uuidv4}></Footer>
  ]);
};
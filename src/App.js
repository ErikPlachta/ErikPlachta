//-- Layer 2: ROOT ELEMENT MANAGING CONTENT AND UI

import React, { useState } from 'react';

//-- components
import Main   from './components/main';
import Header from './components/header';
// import Footer from './components/footer';


export default function App({ uuidv4 }) {

//-- used to updated DOM title and nav awareness events
// const [ locations, setLocations ] = useState([
const [ locations ] = useState([
  {name: 'about'    },
  {name: 'portfolio'},
  {name: 'resume'   },
  {name: 'contact'  },
])

  //-- setting default location to about me
  const [location, setLocation] = useState( locations[0].name )
  
  //-- Returning all content
  return ([  
    <Header key={uuidv4()} uuidv4={uuidv4} locations={locations} locationCurrent={location} setLocation={setLocation}></Header>,
    // <Main   key={uuidv4()} uuidv4={uuidv4} locations={locations} locationCurrent={location} setLocation={setLocation}></Main>
    // <Footer uuidv4={uuidv4}></Footer>

  ]);
};
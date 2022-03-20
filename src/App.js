import React, { useState } from 'react';

//-- components
import Main   from './components/main';
import Header from './components/header';
import Footer from './components/footer';


export default function App() {

//-- used to updated DOM title and nav awareness events
const [locations] = useState([
  {name: 'about'},
  {name: 'portfolio'},
  {name: 'resume'},
  {name: 'contact'},
])

  //-- setting default location to about me
  const [location, setLocation] = useState( locations[0].name )
  
  //-- Returning all content
  return ([  
    <Header locations={locations} locationCurrent={location} setLocation={setLocation}></Header>,
    <Main locations={locations} locationCurrent={location} setLocation={setLocation}></Main>,
    <Footer></Footer>

  ]);
};
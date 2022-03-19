import React, { useState } from 'react';

//-- content
import imgErikPlachta from './assets/img/erik/erik_c_72.png'

//-- components
import Navigation from './components/navigation';
import Main from './components/main';


function App() {

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
  
    <header>
      <h1 className='title'>
      <img className='title-img' src={imgErikPlachta} alt="Erik Plachta" key="erik-title-image" />
        Erik Plachta
      </h1>
      <Navigation locations={locations} locationCurrent={location} setLocation={setLocation}></Navigation>
    </header>,
    <Main locations={locations} locationCurrent={location} setLocation={setLocation}></Main>,

    <footer>
      <div>GitHub</div>
      <div>Linked-In</div>
      <div>Twitter</div>
      <div>Medium</div>
    </footer>
  
  ]);
}

export default App;

import React from 'react';
import Navigation from './navigation';
//-- content
import imgErikPlachta from '../../assets/img/erik/erik_c_72.png'

export default function Header({ uuidv4, locations, setLocations, location, setLocation }) {
  return ([
    <header key={uuidv4()}>
      <h1 className='title' key={uuidv4()}>
      <img className='title-img' src={imgErikPlachta} alt="Erik Plachta" key={uuidv4()} />
        Erik Plachta
      </h1>
      <Navigation key={uuidv4()} locations={locations} setLocations={setLocations} location={location} setLocation={setLocation}></Navigation>
    </header>
  ]);
}

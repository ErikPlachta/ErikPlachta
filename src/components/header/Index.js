import React from 'react';
import Navigation from './navigation';
//-- content
import imgErikPlachta from '../../assets/img/erik/erik_c_72.png'


export default function Header({locations, locationCurrent, setLocation}) {
  return ([
    <header>
      <h1 className='title'>
      <img className='title-img' src={imgErikPlachta} alt="Erik Plachta" key="erik-title-image" />
        Erik Plachta
      </h1>
      <Navigation locations={locations} locationCurrent={locationCurrent} setLocation={setLocation}></Navigation>
    </header>
  ]);
}

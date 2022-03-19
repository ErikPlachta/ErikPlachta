import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';

export default function Navigation( {locations, locationCurrent, setLocation} ) {
  
  //-- Update DOM title
  useEffect(() => {
    document.title = capitalizeFirstLetter(locationCurrent);
  });

  
  return (
    <nav>
      {/* <a href="/">About</a>
      <a href="/">Portfolio</a>
      <a href="/">Resume</a>
      <a href="/">Contact</a> */}

      {locations.map( (locationEl) => (
        // console.log(locationEl)
        <a href="/">{locationEl.name}</a>
      ))}
      

    </nav>
  )
}

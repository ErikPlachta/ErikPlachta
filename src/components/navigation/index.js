import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';

export default function Navigation( {locations, locationCurrent, setLocation} ) {
  
  //-- Update DOM title
  useEffect(() => {
    document.title = capitalizeFirstLetter(locationCurrent);
  }, 
  [locationCurrent]);


  
  return (
    <nav>
      {locations.map( (location) => (
        // console.log(locationEl)
        <span
          
          onClick={() => {
            setLocation(location.name)
          }}
          //-- if location name is current location, add className nav-active. otherwise nothing
          className={`${locationCurrent === location.name && 'nav nav-active' || 'nav'}`}
          key={location.name}
        >
          {capitalizeFirstLetter(location.name)}
        </span>
      ))}
      

    </nav>
  )
}

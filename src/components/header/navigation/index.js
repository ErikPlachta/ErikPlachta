import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../../../utils/helpers';

//-- Being used to generate unique keys for react
// import { v4 as uuidv4 } from 'uuid';

export default function Navigation({ uuid, locations, locationCurrent, setLocation }) {
  
  //-- Update DOM title
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(locationCurrent)} - Erik Plachta`;
  }, 
  [locationCurrent]);


  
  return (
    <nav>
      {locations.map( (location) => (
        // console.log(locationEl)
        <span
          //-- if clicked event to update the location state to update the DOM
          onClick={() => { setLocation(location.name) }}
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

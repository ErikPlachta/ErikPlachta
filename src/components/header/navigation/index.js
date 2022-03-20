import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../../../utils/helpers';

//-- Being used to generate unique keys for react
// import { v4 as uuidv4 } from 'uuid';


export default function Navigation({ location, setLocation, locations, setLocations }) {
  
  
  
  //-- Update DOM title
  useEffect(() => { document.title = `${capitalizeFirstLetter(location)} - Erik Plachta`; }, [location]);

  

  
  return (
    <nav>
      
      {Object.keys(locations).map( (name, number) => (
        <span
          //-- if clicked event to update the location state to update the DOM
          onClick={() => { setLocation(locations[name].name) }}
          //-- if location name is current location, add className nav-active. otherwise nothing
          className={`${( location === locations[name].name && 'nav nav-active' ) || 'nav'}`}
          key={`${locations[name].key}`}
        >
          {capitalizeFirstLetter(locations[name].name)}
        </span>
      ))}
      

    </nav>
  )
}

//------------------------------------------------------------------------------
//-- IMPORTS
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from '../../../utils/helpers';

//------------------------------------------------------------------------------
//-- App Function
export default function Navigation({ location, setLocation, locations, setLocations }) {  

  //-- Extracts the current location requested in URL
  const [currentLocation, setCurrentLocation] = useState(
    (useLocation().pathname).split("/")[1]
  );
  
  //----------------------------------------------------------------------------
  //-- Update DOM title and set location based on requested Route
  useEffect(() => {
      document.title = `${capitalizeFirstLetter(location)} - Erik Plachta`;
      
      //-- if the requested Route is an existing location, update nav accordingly
      if(locations[currentLocation]){
        setLocation(currentLocation)
      }
      //-- Otherwise set to default location for nav awareness
      else {
        setLocation(location); 
      }
    },
    []
  );

  //----------------------------------------------------------------------------
  //-- Return Function
  return (
    <nav>
      {/* {setLocation(useCurrentPath())} */}
      {/* Build Navigation based on locations state object values */}
      {Object.keys(locations).map( (name, number) => ( 
        <span
          onClick={() => {  setLocation(locations[name].name) }} //-- if clicked event to update the location state to new location
          className={`${( location === locations[name].name && 'nav nav-active' ) || 'nav'}`} //-- if location name is current location, add className nav-active. otherwise nothing
          key={`${locations[name].key}`}
        >
          <Link to={"/" + locations[name].name}>  {/* If link selected, re-route to proper location */}
            {capitalizeFirstLetter(locations[name].name)}
          </Link>
        </span>
      ))}
    </nav>
  )
}

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
      
      //-- If the default landing-page
      if (currentLocation === "" || currentLocation === "/" ){
        setLocation("about");
        document.title = `${capitalizeFirstLetter('about')} - Erik Plachta`;
      }
      //-- if requesting another location
      else if(locations[currentLocation] ){
        setLocation(currentLocation)
        document.title = `${capitalizeFirstLetter(location)} - Erik Plachta`;
      }
      //-- Otherwise set to default location for nav awareness
      else {
        //   setLocation(location); 
        document.title = `404 - Erik Plachta`;
        setLocation("")
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

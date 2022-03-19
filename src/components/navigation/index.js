import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';

export default function Navigation( {location, setLocation} ) {
  
  //-- Update DOM title
  useEffect(() => {
    document.title = capitalizeFirstLetter(location);
});

  return (
    <nav>
      <a href="/">About</a>
      <a href="/">Portfolio</a>
      <a href="/">Resume</a>
      <a href="/">Contact</a>

    </nav>
  )
}

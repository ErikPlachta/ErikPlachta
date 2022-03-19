import React, { useState, useEffect } from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';

export default function Navigation( location ) {
  
  //-- Update DOM title
  useEffect(() => {
  
  
    // Clean up the subscription
    document.title = location
  
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

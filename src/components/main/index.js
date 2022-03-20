import React, {useState} from 'react'
// import AboutMe from './about-me';
// import Portfolio from './portfolio';
// import Resume from './resume';
// import Contact from './contact';



export default function Main({ uuidv4, locations, setLocations, location, setLocation }) {

    
    return (
        //-- returns approriate component based on locationCurrent
        <main>
            {locations[location].jsx}
            
        </main>
    );
};

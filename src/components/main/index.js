import React from 'react'

export default function Main({ uuidv4, locations, setLocations, location, setLocation }) {

    return (
        //-- returns approriate component based on `location`
        <main>
            {locations[location].jsx}            
        </main>
    );
};

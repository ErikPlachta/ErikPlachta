import React, {useState} from 'react'

import AboutMe from './about-me';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';

export default function Main({ locations, locationCurrent, setLocation}) {

    const [locationContent] = useState({
        'about': {import: <AboutMe></AboutMe>},
        'portfolio': {import: <Portfolio></Portfolio>},
        'resume': {import: <Resume></Resume>},
        'contact': {import: <Contact></Contact>},
    })
    
    return (
        //-- returns approriate component based on locationCurrent
        <main>
            {locationContent[locationCurrent].import}
        </main>
    );
};

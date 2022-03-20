import React, {useState} from 'react'

import AboutMe from './about-me';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';

export default function Main({ uuid, locations, locationCurrent, setLocation }) {

    const [locationContent] = useState({
        'about': {import: <AboutMe uuid={uuid} ></AboutMe>},
        'portfolio': {import: <Portfolio uuid={uuid}></Portfolio>},
        'resume': {import: <Resume uuid={uuid}></Resume>},
        'contact': {import: <Contact uuid={uuid}></Contact>},
    })
    
    return (
        //-- returns approriate component based on locationCurrent
        <main>
            {locationContent[locationCurrent].import}
        </main>
    );
};

import React, {useState} from 'react'

import AboutMe from './about-me';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';

export default function Main({ uuid, locations, locationCurrent, setLocation }) {

    //-- Sub-Components within the main container
    const [locationContent, setLocationContent] = useState({
        'about':     {component: <AboutMe   uuid={uuid} ></AboutMe>},
        'portfolio': {component: <Portfolio uuid={uuid}></Portfolio>},
        'resume':    {component: <Resume    uuid={uuid}></Resume>},
        'contact':   {component: <Contact   uuid={uuid}></Contact>},
    })
    
    return (
        //-- returns approriate component based on locationCurrent
        <main clasName="container">
            {locationContent[locationCurrent].component}
        </main>
    );
};

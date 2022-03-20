import React, {useState} from 'react'

import AboutMe from './about-me';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';

export default function Main({ uuidv4, locations, locationCurrent, setLocation }) {

    //-- Sub-Components within the main container
    // const [locationContent, setLocationContent] = useState({
    const [ locationContent ] = useState({
        'about':     {component: <AboutMe   uuidv4={uuidv4}   key={uuidv4()}  ></AboutMe>     },
        'portfolio': {component: <Portfolio uuidv4={uuidv4}   key={uuidv4()}  ></Portfolio>    },
        'resume':    {component: <Resume    uuidv4={uuidv4}   key={uuidv4()}  ></Resume>       },
        'contact':   {component: <Contact   uuidv4={uuidv4}   key={uuidv4()}  ></Contact>      },
    })
    
    return (
        //-- returns approriate component based on locationCurrent
        <main>
            {locationContent[locationCurrent].component}
        </main>
    );
};

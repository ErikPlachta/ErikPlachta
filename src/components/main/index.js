import React, {useState} from 'react'
import AboutMe from './about-me';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';

export default function Main({ locations, locationCurrent, setLocation}) {

    const [locationContent] = useState([
        {name: 'about', import: <AboutMe></AboutMe>},
        {name: 'portfolio', import: <Portfolio></Portfolio>},
        {name: 'resume', import: <Resume></Resume>},
        {name: 'contact', import: <Contact></Contact>},
      ])

    return ([
        <section>
            {locations.map( (location) => (
                // console.log(location)
                <span>{location.name}</span>
            ))}

        </section>
]);
};

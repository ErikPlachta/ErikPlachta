import React from 'react'
import AboutMe from './about-me';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';

export default function Main(props) {
    return ([
        <h2>Main Section</h2>,
        <AboutMe></AboutMe>,
        <Portfolio></Portfolio>,
        <Resume></Resume>,
        <Contact></Contact>,
    ]);
};

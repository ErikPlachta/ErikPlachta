import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function AboutMe({ uuidv4, setLocation }) {
  let navigate = useNavigate(); //-- used for navigational buttons
  
  const navigateButton = (event) => {
    event.preventDefault();
    document.title = `${event.target.id} - Erik Plachta`; 
    setLocation(event.target.id); //-- for navigation
    navigate(`/${event.target.id}`, {replace: true}) //-- change route
  }

  return (
    <article className='container'>
      {/* header banner */}
      <section>
        <h2 className="article-header">Hi, I'm Erik 👋🏼</h2>
      </section>      
      {/* content */}
      <section className="article-content-container">
        <div className="article-content">
          <section>
            <div>
              I'm a passionate and purpose driven software developer with a focus
              on modular design. I enjoy building systems and workflows that are
              scalable, modular, and efficient.
              <input 
                type="button"
                className="about-button"
                id="projects"
                value='Checkout my projects...'
                onClick={navigateButton}
                >
              </input>
            </div>
          </section>
        {/* SIGNATURE LINE */}
          <p className="signature">
            Erik Plachta - June, 2022
          </p>
        </div>
      </section>
    </article>
  )
  
};

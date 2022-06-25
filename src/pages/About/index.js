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
        <h2 className="article-header">About Erik</h2>
      </section>      
      {/* content */}
      <section className="article-content-container">
        <div className="article-content">
          <h3 className="article-content-title">
            
          </h3>
          <section>
            <div>
              Erik is a passionate and purpose driven software developer with a
              focus on modular design. He builds systems and workflows that are
              scalable, modular, and efficient.
            </div>
            
            <br />

            <div className='article-content-indent'>
                To learn more about Erik's work, check out the <b
                  className='about-link' id='projects' onClick={navigateButton}
                >Projects</b> page. 
            </div>
            <br />
            <div className='article-content-indent'>
              To get in touch, check out the <b className='about-link' id='contact' onClick={navigateButton}>
                Contact</b> page or follow the social links within the footer.
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

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
          <h3 className="article-content-title">
            A little bit about me 👇🏼
          </h3>
          <br />
          <section>
            <div>
              I'm passionate and purpose driven. My strengths center around
              an ability to think systematically and solve problems objectively.
              
                I enjoy building systems and workflows that are scalable,
                modular, and efficient. It's something I've learned to do in all
                of my work.
            </div>
            <hr />
          {/* PERSONALLY */}
            <div className='about-div'>
              <b>Outside of work</b>, I spend a lot of time with family. I enjoy
              being challenged and I'd say my hobby is learning. Technology,
              Software development, personal knowledge management, and
              stoicism are my go-tos over the past few years.
              
              {/* <p className="article-content-indent"> */}
                <input 
                  type="button"
                  className="about-button"
                  id="projects"
                  value='Learn more...'
                  onClick={navigateButton}
                  >
                </input>
              {/* </p> */}
            </div>
            <hr />
          {/* PROFESSIONALLY */}
          <div className="about-div">
              <b>My professional experience is in the IT field.</b> I'm a Technical Support
              Director and Software Engineer at a software development company.
              <input 
                type="button"
                className="about-button"
                id="resume"
                value='Learn more...'
                onClick={navigateButton}
                >
              </input>
            </div>
            <hr />
            {/* <div className="about-div">
              <p className='article-content-indent'>
                <b>Soft Skills:</b>
                <br />
                Communication, empathy, self-awareness, problem-solving, patience,
                dedication, focus, passionate, flexible, organized, time management,
                teachable, driven, leadership.
              </p>
              
              <p className='article-content-indent'>
                <b>Hard Skills:</b>
                <br />
                IT automation, IT & Networking, Customer Service, Software &
                Hardware Support, MSP Strategy, Documentation, Project Management,
                DevOps, Full-stack Development, Python, PowerShell, JavaScript,
                HTML, CSS, SQL, MySQL, MongoDB, AWS, GCP, Heroku, and GitHub.
              </p>

            </div> */}
          </section>
        {/* SIGNATURE LINE */}
          <p className="signature">
            - Erik Plachta - May, 2022
          </p>
        </div>
      </section>
    </article>
  )
  
};

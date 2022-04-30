import React, { useEffect } from 'react';

export default function AboutMe({ uuidv4 }) {
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
              <b>I'm passionate and purpose driven.</b> My strengths center around
              an ability to think systematically and solve problems objectively.
              <p className='article-content-indent'>
                I enjoy building systems and workflows that are scalable,
                modular, and efficient. It's something I've learned to do in all
                of my work.
              </p>
            </div>
            <hr />
          {/* PERSONALLY */}
            <div>
              <b>Outside of work</b>, I spend a lot of time with family. As far as 
              hobbies go, I enjoy being challenged so I'd say my hobby is learning.
              Technology, Software development, personal knowledge management, and
              stoicism are my go-tos over the past few years.
              
              {/* TODO:: 04/29/22 #EP || Add Learn More Button */}
              {/* <p className="article-content-indent">
                Check out my Projects to learn more about what I'm working on!
              </p> */}
            </div>
            <hr />
          {/* PROFESSIONALLY */}
            <div>
              <b>My professional experience is in the IT field.</b> I'm a Technical Support
              Director and Software Engineer at a software development company.
            </div>
            <hr />
            <div>
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
            </div>
            {/* TODO:: 04/29/22 #EP || Add Learn More Button */}
            {/* <span className="article-content-indent">
              Check out my Resume to learn more about my professional experience.
            </span> */}
          </section>
        {/* SIGNATURE LINE */}
          <p className="signature">
            - Erik Plachta - March 2022
          </p>
        </div>
      </section>
    </article>
  )
  
};

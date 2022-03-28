import React from 'react';

export default function AboutMe({ uuidv4 }) {
  return (
    <article className='container'>
      {/* header banner */}
      <section>
        <h2 className="article-header">Hi, I'm Erik</h2>
      </section>      
      {/* content */}
      <section className="article-content-container">
        <div className="article-content">
          <h3 className="article-content-title">
            A little bit about me...
          </h3>
          <p className="article-content-indent">
            Professionally, I'm an IT Engineer, MSP Director, Project Manager,
            and Software Developer. I've spent over 15 years in customer service
            industry.
            <br />
            <br />
            On a personal level, family and enjoying life is my top priority. 
            I also spend a lot of time working on software projects, learning
            new skills, playing music with family, and experiencing new things.
          </p>

          <h3 className="article-content-title">
            Want to learn more about me or my work?
          </h3>
          <p className="article-content-indent">
            Check out the <b>Projects</b> tab to learn more about my work.
            <br />
            <br />
            Head over to the <b>Resume</b> page to request a copy.
            <br />
            <br />
            If y ou want to get in touch, head on over to the <b>Contact</b> page or
            reach out to me on my social links below.
            
          </p>
          <p className="signature">- Erik Plachta - March 2022</p>
        </div>
      </section>
    </article>
  )
};

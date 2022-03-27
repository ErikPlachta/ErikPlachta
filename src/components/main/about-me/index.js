import React from 'react';

export default function AboutMe({ uuidv4 }) {
  return (
    <article className='container'>
      
      <section>
        <h2 className="article-header">Hi, I'm Erik</h2>
      </section>
      
      {/* <section> */}
      <section className="article-content-container">

        {/* <div className="article-content"> */}
          
          {/* <p className="article-content-title">
            Thanks for checking out my website.
          </p> 
          <p className="article-content-indent">
            I've built this page as a portfolio, 
          </p> */}

          {/* <p className="article-content-title">
            IT Engineer, MSP Director, Project Manager, and Software Developer. 
          </p>
          <p className="article-content-indent">
            Officia sunt cillum dolor proident excepteur elit.
          </p>
        </div>

        <div className="article-content">
          <p className="article-content-title">
            Outside of work, my primary focus is family and enjoying life. 
          </p>
          <p className="article-content-indent">
            Time goes by fast and I want to make memories with the people I love.
          </p>
        </div> */}

        <div className="article-content">
          <p className="article-content-title">
            Welcome to my professional portfolio.
          </p>
          <p className="article-content-indent">
            Check out the <b>Projects</b> tab to learn about what projects I'm working
            on. Check out my <b>Resume</b> to learn about my professional experience.
            If you want to get in touch, head on over to the <b>Contact</b> page or
            reach out to me on my social links below.
          </p>
          <p className="signature">- Erik Plachta - March 2022</p>
        </div>
      </section>
    </article>
  )
}

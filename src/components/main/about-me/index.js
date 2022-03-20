import React from 'react';

export default function AboutMe({ uuid }) {
  return (
    <article className='container'>
      
      <section>
        <h2 className="article-header">Hi, I'm Erik.</h2>
      </section>
      
      {/* <section> */}
      <section className="article-content-container">

        <div className="article-content">
          <p className="article-content-title">
            Professionally, I'm an IT Engineer, MSP Director, Project Manager,
            and Software Developer. 
          </p>
          <p className="article-content-indent">
            I specalize in designing modular and efficient systems that scale.
          </p>
        </div>

        <div className="article-content">
          <p className="article-content-title">
            Outside of work, my primary focus is family and enjoying life. 
          </p>
          <p className="article-content-indent">
            Time goes by fast, and I want to make memories with the people I love.
          </p>
        </div>

        <div className="article-content">
          <p className="article-content-title">
            When it comes to hobbies, software development is my focus lately.
          </p>
          <p className="article-content-indent">
            To learn more about those projects, check out my Portfolio, above
          </p>          
          <p className="signature">- Erik Plachta on March 20th, 2022</p>
        </div>
      </section>
    </article>
  )
}

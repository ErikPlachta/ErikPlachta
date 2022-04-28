import React from 'react';

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
            About
          </h3>
          
          <p className="article-content-indent">
            <b>A little bit about me.</b> I am passionate, dedicated, and
            focused. Strengths in problem solving, system thinking, project
            management, documentation, organization, teaching, learning, and
            long-term strategy.
          </p>
          
          <p className="signature">
            - Erik Plachta - March 2022
          </p>
        </div>
      </section>
    </article>
  )
};

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
            A little bit about me.
          </h3>
          
          <p>
            <b>Professionally</b>, I'm a Technical Support Director and Software
            Engineer at a software development company. I'm passionate about
            building and maintaining modular systems that can scale thoughtfully
            and effectively.
          </p>
          <p className="article-content-indent">
            Check out my Resume to learn more about my professional experience.
          </p>

          <hr />

          <p>
            <b>Outside of work</b>, I spend a lot of time with family. <b>As far as 
            hobbies go</b>, the thing I enjoy the most is software development, and
            I spend a lot of free-time sharpening and expanding my development skills.
          </p>
          <p className="article-content-indent">
            Check out my Projects to learn more about what I'm working on.
          </p>

          <p>
            
          </p>

          <p className="signature">
            - Erik Plachta - March 2022
          </p>
        </div>
      </section>
    </article>
  )
};

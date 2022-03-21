import { object } from 'prop-types'
import React, { useState } from 'react'

export default function Portfolio({ uuid }) {

  const [portfolioProjects, setPortfolioProjects ] = useState([
    {
      title: "title 1",
      description: "desc 1",
      url: "url 1",
      img: "img 1"
    },
    {
      title: "title 2",
      description: "desc 2",
      url: "url 2",
      img: "img 2"
    }
  ])


  return (
    <article className='container'>
      <section>
        <h2 className="article-header">Portfolio</h2>
      </section>
      <section className="article-content-container">
        { portfolioProjects.map( project => (
          // {number}
          <div className='portfolio-project'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.url}</span>
            <img src={project.img} alt={project.title}></img>
          </div>
        ))};
      </section>
    </article>
  )
}

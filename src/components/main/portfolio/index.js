import { object } from 'prop-types'
import React, { useState } from 'react'

export default function Portfolio({ uuidv4 }) {

  const [portfolioProjects, setPortfolioProjects ] = useState([
    {
      title: "title 2",
      description: "desc 2",
      url: "url 2",
      img: "img 2",
      style: 1
    },
    {
      title: "My Budget - PWA - Concept Application",
      description: "A Budget concept PWA demonstrating a seamless user experience no matter the users network connection. Hosted on Heroku, running a Node/express.js server, no SQL Database with MongoDB.",
      url: "https://github.com/ErikPlachta/pwa-personal-budget",
      img: "https://raw.githubusercontent.com/ErikPlachta/pwa-personal-budget/main/demo.gif",
      style: 1
    },
    {
      title: "title 1",
      description: "desc 1",
      url: "url 1",
      img: "img 1",
      style: .5
    },
    {
      title: "title 2",
      description: "desc 2",
      url: "url 2",
      img: "img 2",
      style: .5
    },
    {
      title: "title 1",
      description: "desc 1",
      url: "url 1",
      img: "img 1",
      style: .5
    },
    {
      title: "title 2",
      description: "desc 2",
      url: "url 2",
      img: "img 2",
      style: 1
    }
  ])


  return (
    <article className='container' id='portfolio-article'>
      <section>
        <h2 className="article-header" id="prtfolio-header">Portfolio</h2>
      </section>
      <section className="article-content">
        <p className="article-content-title">
          Below is a collection of my favorite projects.
        </p>
      </section>
      <section className="article-content-container" id='portfolio-container'>
        { portfolioProjects.map( project => (
          // {number}
          <div
            key={uuidv4()}
            className={`portfolio-project ${( project.style === 1 && 'flex_100' ) || 'flex_50'}`}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span><a href={project.url} target="_blank" ></a></span>
            <img src={project.img} alt={project.title}></img>
          </div>
        ))}
      </section>
    </article>
  )
}

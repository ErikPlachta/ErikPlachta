import { object } from 'prop-types'
import React, { useState } from 'react'

import restfulApiConcept from '../../../assets/img/restful-api-social-network-concept.png'

export default function Portfolio({ uuidv4 }) {

  const [portfolioProjects, setPortfolioProjects ] = useState([
    {
      title: "posnation.support",
      description: "A web app that servers as a front-end to an AWS S3 storage bucket. I built the website and own the domain.",
      nerd_notes:  
        <ul>
          <li>WebHost: GitHub</li>
          <li>Database: AWS S3 Bucket</li>
          <li>API: AWS SDK</li>
        </ul>
      ,
      url_description: "Click Here to checkout the live website.",
      url: "https://posnation.support/index.html",
      img: "https://raw.githubusercontent.com/ErikPlachta/ErikPlachta/main/assets/images/posnation-support-example.gif",
      style: 1
    },
    {
      title: "Image Manager",
      description: "A python app compiled into an executable designed to automate IT related services. Has over 5,000 active end-points.",
      nerd_notes: "Website hosted on GitHub. Files hosted on AWS S3 Bucket. Accessing data with the AWS JS SDK.",
      // url_description: "Click Here to checkout the live website.",
      // url: "https://posnation.support/index.html",
      img: "https://raw.githubusercontent.com/ErikPlachta/ErikPlachta/main/assets/images/imagemanager_map.png",
      // iframe: <iframe title="Image Manager's Global Footprint" src="https://datastudio.google.com/embed/reporting/ec3bf210-888a-4bb2-a166-f40c152afd01/page/xYNXC" allowFullScreen></iframe>,
      style: 1
    },
    // {
    //   title: "Sheet Show",
    //   description: "The Sheet Show app is a group Project concept app I worked on with friends to demonstrate a JawsDB/MySQL database hosted on Heroku with full CRUD functionality.",
    //   nerd_notes: "",
    //   url: "https://github.com/barrantesc/The-Sheet-Show",
    //   img: "https://raw.githubusercontent.com/ErikPlachta/ErikPlachta/main/assets/images/sheetshow.gif",
    //   style: .5
    // },
    {
      title: "My Budget - PWA - Concept App",
      description: "A Budget concept PWA demonstrating a seamless user experience no matter the users network connection. Hosted on Heroku, running a Node/express.js server, no SQL Database with MongoDB.",
      nerd_notes: "",
      url: "https://github.com/ErikPlachta/pwa-personal-budget",
      url_description: "Click Here to checkout the GitHub.",
      img: "https://raw.githubusercontent.com/ErikPlachta/pwa-personal-budget/main/demo.gif",
      style: 1,
    },
    // {
    //   title: "get_Weather_arg_City",
    //   description: "Using the OpenWeather API to get a weather forecast",
    //   nerd_notes: "",
    //   url_description: "Click here to checkout GitHub!",
    //   url: "https://github.com/ErikPlachta/get_Weather_arg_City",
    //   img: "https://raw.githubusercontent.com/ErikPlachta/get_Weather_arg_City/main/assets/images/demo1.png",
    //   style: .5
    // },
    {
      title: "A Daily Scheduler",
      description: "A daily scheduler management web app concept.",
      nerd_notes: "",
      url_description: "Click here to checkout GitHub!",
      url: "https://github.com/ErikPlachta/a_Daily_Scheduler_WebApp",
      img: "https://raw.githubusercontent.com/ErikPlachta/a_Daily_Scheduler_WebApp/main/assets/images/demo.gif",
      style: 1,
    },
    {
      title: "node-express-notes-app",
      description: "This is a Note Taking concept web APP built on Node with Express to manage API calls to a JSON database. Demonstrate how Express.js can be used as an API gateway to a JSON database. Using Heroku to host node.js server.",
      nerd_notes: "",
      url_description: "Click here to checkout GitHub!",
      url: "https://github.com/ErikPlachta/node-express-notes-app",
      img: "https://raw.githubusercontent.com/ErikPlachta/node-express-notes-app/main/public/assets/images/demo-full.gif",
      style: 1,
    },
    {
      title: "RESTful API Gateway for a Social Network Platform - Concept App",
      description: "A ReSTful API Gateway Concept App built on MongoDB using Mongoose as a ODM for a social-media style platform.",
      nerd_notes: "",
      url: "https://github.com/ErikPlachta/api-gateway-express-mongodb",
      url_description: "Click here to checkout GitHub!",
      img: 'https://raw.githubusercontent.com/ErikPlachta/api-gateway-express-mongodb/main/public/images/restful-api-social-network-concept.png',
      style: 1
    },
  ])


  return (
    <article className='container' id='portfolio-article'>
      <section>
        <h2 className="article-header" id="prtfolio-header">Portfolio</h2>
      </section>
      <section className="article-content">
        <p className="article-content-title">
          Below is a collection of my most recent projects. It's a collection concept
          applications that I've built as I was learning, and live Apps with an active
          customer base.
        </p>
        
      </section>
      <section className="article-content-container" id='portfolio-container'>
        { portfolioProjects.map( project => (
          // {number}
          <article
            key={uuidv4()}
            className={`portfolio-project ${( project.style === 1 && 'flex_100' ) || 'flex_50'}`}
          >
            <div className="">
              <h3 className='portfolio-title'>{project.title}</h3>
              <span className='article-content-indent'>{project.description}</span>
            </div>
            
            <div className='nerd-notes article-content-indent-list'>
              <h4>Nerd Notes</h4>
              {project.nerd_notes}
            </div>
            
            {project.img ? <img src={project.img} alt={project.title}></img> : <span><a href={project.url} target="_blank" rel="noreferrer">{project.url_description}</a></span>}
            {project.iframe ? project.iframe : null }


          </article>
        ))}
      </section>
    </article>
  )
}

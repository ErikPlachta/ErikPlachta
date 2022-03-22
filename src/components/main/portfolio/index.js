import { object } from 'prop-types'
import React, { useState } from 'react'

import restfulApiConcept from '../../../assets/img/restful-api-social-network-concept.png'

export default function Portfolio({ uuidv4 }) {

  const [portfolioProjects, setPortfolioProjects ] = useState([
    {
      title: "Image Manager",
      description:
        <span>
          <b>A compiled Windows application built to automate IT related services remotely.</b>
          
          <p className='article-content-indent'>
            Image Manager is a passion project of mine -- and I've done all development
            as a hobby and for fun outside of work. It's a headless executable 
            that identifies and then resolves IT related issues specific to my 
            priamry customer's needs.
            <br /><br />
            The project initially started out as me wanting to learn Python and
            strengthen my development skills.

            several years after it's offical release, it's become an integral tool
            used POS Nation. With a active user base of over 6,000 clients, it
            automates more than 40 hours of IT related services every week. 
          </p>
        </span>
      ,
      nerd_notes:  
        <ul>
          <li>Host: Windows OS</li>
          <li>Database-Local: Windows Registry/JSON/TXT</li>
          <li>Database-Cloud: Google Sheets</li>
          <li>API: Google Apps Scripts</li>
          <li>Framework: Python/Powershell</li>
          <li>Key Feature: Remote Updating</li>
          <li>Key Feature: Cloud Logging</li>
        </ul>
      ,
      // img: "https://raw.githubusercontent.com/ErikPlachta/ErikPlachta/main/assets/images/imagemanager_map.png",
      media_description: "See the map below for a visualization of Image Manager's global footprint.",
      iframe: <iframe title="Image Manager's Global Footprint" src="https://datastudio.google.com/embed/reporting/ec3bf210-888a-4bb2-a166-f40c152afd01/page/xYNXC" allowFullScreen></iframe>,
      style: 1
    },
    {
      title: "posnation.support",
      description: <span>A web app that servers as a front-end to an <b>AWS S3 storage bucket</b>. I've built the website, manage AWS resources, and own the domain.</span>,
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
      nerd_notes: 
        <ul>
          <li>WebHost: Heroku</li>
          <li>Framework: Express Server on Node.js</li>
          <li>Framework: JS/CSS/HTML</li>
          <li>Database: MongoDB Atlas</li>
          <li>API: 1</li>
          <li>API: 2</li>
          <li>API: 3</li>
        </ul>
      ,
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
      description: "A concept app built to demonstrate the power and flexabiliy of the Web Storage API framework.",
      nerd_notes: 
        <ul>
          <li>WebHost: GitHub</li>
          <li>Framework: JS/HTML/CSS</li>
          <li>Database: Local Storage</li>
          <li>API: Web Storage</li>
        </ul>
      ,
      url_description: "Click here to checkout GitHub!",
      url: "https://github.com/ErikPlachta/a_Daily_Scheduler_WebApp",
      img: "https://raw.githubusercontent.com/ErikPlachta/a_Daily_Scheduler_WebApp/main/assets/images/demo.gif",
      style: 1,
    },
    {
      title: "node-express-notes-app",
      description: "This is a Note Taking concept web APP built on Node with Express to manage API calls to a JSON database. Demonstrate how Express.js can be used as an API gateway to a JSON database. Using Heroku to host node.js server.",
      nerd_notes: 
        <ul>
          <li>WebHost: Heroku</li>
          <li>Framework: Express Server on Node.js</li>
          <li>Framework: JS/CSS/HTML</li>
          <li>Database: MongoDB Atlas</li>
          <li>API: 1</li>
          <li>API: 2</li>
          <li>API: 3</li>
        </ul>
      ,
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
          Welcome to my portfolio. I've put together a small collection of my 
          work. Below, you'll find a collection of full stack Windows and Web
          apps. A few are active with a live customer base. Others are concepts
          that I'm proud of for unique reasons.
        </p>
        
      </section>
      <section className="article-content-container" id='portfolio-container'>
        { portfolioProjects.map( project => (
          // {number}
          <article
            key={uuidv4()}
            className={`portfolio-project ${( project.style === 1 && 'flex_100' ) || 'flex_50'}`}
          >
            <h3 className='portfolio-title'>{project.title}</h3>
            <div className="">
              {project.description}
            </div>
            
            <div className='nerd-notes article-content-indent-list'>
              <h4>Nerd Notes</h4>
              {project.nerd_notes}
            </div>
            
            {project.media_description ? <p className='article-content media_description'>{project.media_description}</p> : null}
            {project.img ? <img src={project.img} alt={project.title}></img> : <span><a href={project.url} target="_blank" rel="noreferrer">{project.url_description}</a></span>}
            {project.iframe ? project.iframe : null }


          </article>
        ))}
      </section>
    </article>
  )
}

import { object } from 'prop-types'
import React, { useState } from 'react'

import restfulApiConcept from '../../../assets/img/restful-api-social-network-concept.png'

export default function Projects({ uuidv4 }) {

  const [Projects, setProjects ] = useState([
    //-- Image Manager
    {
      id: 'image-manager',
      title: "Image Manager",
      summary: "Automating IT Related Services -- Remotely",
      description:
        <span>
          <p>
            Image Manager is a Windows App that automates IT services. It's a
            headless executable that identifies and then resolves issues specific
            to my primary customer's needs. As issues are resolved, it logs
            the results to a cloud database.
            <br /><br />
            This project initially started out as me wanting to learn Python and
            strengthen my development skills.

            several years after it's release, it's become an integral tool
            used by <a href="https://www.posnation.com/" target="_blank"
            rel="noreferrer">POS Nation</a>. With an active user base of over
            6,000 clients, it automates 40+ hours of IT related services every
            week. 
          </p>
        </span>
      ,
      nerd_notes:  
        <ul>
          <li><b>Platform</b>
            <ul>
              <li>Windows</li>
            </ul>
          </li>
          <li><b>Database</b>
            <ul>
              <li>WindowsRegistry/JSON/TXT</li>
              <li>Google Cloud Platform</li>
            </ul> 
          </li>
          <li><b>API</b>
            <ul>
              <li>Google Apps Scripts</li>
              <li>Network Profile</li>
              <li>Windows OS</li>
            </ul>
          </li>
          <li><b>Framework</b>
            <ul>
              <li>Google Apps Script</li>
              <li>Python</li>
              <li>PowerShell</li>
            </ul>
          </li>
          <li><b>Key Features</b>
            <ul>
              <li>Remote Updates</li>
              <li>Cloud Logging</li>
            </ul>
          </li>
        </ul>
      ,
      // img: "https://raw.githubusercontent.com/ErikPlachta/ErikPlachta/main/assets/images/imagemanager_map.png",
      media_description: "See the map below for a visualization of Image Manager's global footprint.",
      iframe: <iframe title="Image Manager's Global Footprint" src="https://datastudio.google.com/embed/reporting/ec3bf210-888a-4bb2-a166-f40c152afd01/page/xYNXC" allowFullScreen></iframe>,
      style: 1
    },
    //-- posnation.support
    {
      id: 'posnation-support',
      title: "posnation.support",
      summary: "A Technical Support Engineer Resource",
      description:
        <span>
          <p>
            This primary goal of <a href="https://posnation.support" target="_blank"
            rel="noreferrer">posnation.support</a> is to centralize resources into
            an easy-to-access cloud location. I've also built in a few tools
            connected to third-party APIs related to providing IT Support and 
            services. 
            <br />
            <br />
            This is another App with that I've built for my team in my time outside
            of work. <a href="https://posnation.support" target="_blank"
            rel="noreferrer"> The app</a> saves a lot of time, and provides a
            professional customer facing experience too. It's actively used
            daily to provide service to thousands of customers around the world.
          </p>
        </span>
      ,
      
      nerd_notes:  
        <ul>
          <li><b>Platform</b>
            <ul>
              <li>Website</li>
              <li>PWA</li>
            </ul>
          </li>
          <li><b>Database</b>
            <ul>
              <li>SQL/WindowsRegistry/JSON/TXT</li>
              <li>Google Cloud Platform</li>
              <li>AWS S3 Bucket</li>
            </ul> 
          </li>
          <li><b>API</b>
            <ul>
              <li>AWS JS SDK</li>
              <li>SQL Server</li>
              <li>Network Profile</li>
              <li>Serial Number Lookup</li>
            </ul>
          </li>
          <li><b>Framework</b>
            <ul>
              <li>React</li>
              <li>GitHub</li>
              <li>Google Domain</li>
            </ul>
          </li>
          <li><b>Key Features</b>
            <ul>
              <li>Remote Updates</li>
              <li>Cloud Logging</li>
            </ul>
          </li>
        </ul>
      ,
      url_description: "Click Here to checkout the live website.",
      url: "https://posnation.support/index.html",
      img: "https://raw.githubusercontent.com/ErikPlachta/ErikPlachta/main/assets/images/posnation-support-example.gif",
      style: 1
    },
     //-- RESTful API Gateway
     {
      title: "RESTful API Gateway for a Social Network Platform - Concept App",
      description: "A ReSTful API Gateway Concept App built on MongoDB using Mongoose as a ODM for a social-media style platform.",
      nerd_notes: "",
      url: "https://github.com/ErikPlachta/api-gateway-express-mongodb",
      url_description: "Click here to checkout GitHub!",
      img: 'https://raw.githubusercontent.com/ErikPlachta/api-gateway-express-mongodb/main/public/images/restful-api-social-network-concept.png',
      style: 1
    },
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
    //-- A Daily Scheduler
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
    //-- node-express-notes-app
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
    }
  ])


  return (
    <article className='container' id='projects-article'>
      <section>
        <h2 className="article-header" id="projects-header">Projects</h2>
      </section>
      <section className="article-content">
        <section class="article-content-container">
          <p className="article-content-title">
            This page is a showcase of my favorites development projects. 
          </p>
          <p className="article-content-indent">
            First on the list are <a href='#image-manager'><b>Image Manager</b>
            ( <em>a full-stack windows app</em> )</a> and  <a href="#posnation-support">
            <b>posnation.support</b> <em>( a full-stack web app )</em></a>. These are live
            applications with thousands of active users. I've built and maintain 
            both in my free-time outside of work. Together, they save my company
            40-80 hours a week on payroll.
          <br />
          <br />
            The rest of the projects are proof-of-concept Apps that I've built
            while I'm learning new concepts. Each one represents a unique aspect
            of full stack web development.
          </p>
        </section>
      </section>
      <section className="article-content-container" id='projects-container'>
        { Projects.map( project => (
          // {number}
          <article
            id={project.id}
            key={project.id}
            className={`projects-project ${( project.style === 1 && 'flex_100' ) || 'flex_50'}`}
            // id={project.title}
          >
            {/* title */}
            <div className="projects-head">
              <h3 className='projects-title'>{project.title}</h3>
              {project.summary ? <p className="projects-summary">{project.summary}</p> : null}
            </div>
            {/* About */}
            <div className="project-about article-content-indent">
              <h4 className='project-h4'>About</h4>
              {project.description}
            </div>
            {/* Nerd Notes */}
            <div className='nerd-notes article-content-indent-list'>
            <h4 className='project-h4'>Nerd Notes</h4>
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

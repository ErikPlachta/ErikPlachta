import React, { useState } from 'react'

// import { object } from 'prop-types'
// import restfulApiConcept from '../../../assets/img/restful-api-social-network-concept.png'

export default function Projects({ uuidv4 }) {

  // const [ Projects, setProjects ] = useState([
  const [ Projects ] = useState([
    //-- Image Manager
    {
      id: 'image-manager',
      title: "Image Manager",
      summary: 
        <span>
          <p>
            <hr />
            <b>Remotely Automate IT Related Services</b>
            <br />
            Windows Application
            <hr />
          </p>
        </span>
      ,
      description:
        <p className="project-about-description">
          {/* <p> */}
            Image Manager is a Windows App that automates IT services. It's a
            headless executable that identifies and then resolves issues specific
            to my primary customer's needs. As issues are resolved, it logs
            the results to a cloud database.
            <br /><br />
            This project initially started out as me wanting to learn Python and
            strengthen my development skills.
            <br /><br />
            Several years after it's release, it's become an integral tool
            used by <a href="https://www.posnation.com/" target="_blank"
            rel="noreferrer">POS Nation</a>. With an active user base of over
            3,600 clients, it automates 40+ hours of IT related services every
            week. 
          {/* </p> */}
        </p>
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
              <li>WindowsRegistry, JSON, TXT</li>
              <li>Google Cloud Platform</li>
            </ul> 
          </li>
          <li><b>API</b>
            <ul>
              <li>Google Apps Scripts</li>
              <li>Network Profile</li>
              <li>Windows OS</li>
              <li>PowerShell</li>
              <li>SQL Server</li>
            </ul>
          </li>
          <li><b>Framework</b>
            <ul>
              <li>Python</li>
              <li>Google Apps Script</li>
            </ul>
          </li>
          <li><b>Features</b>
            <ul>
              <li>Remote Updates</li>
              <li>Cloud Logging</li>
            </ul>
          </li>
        </ul>
      ,
      img: "https://raw.githubusercontent.com/ErikPlachta/ErikPlachta/main/assets/images/imagemanager.png",
      media_description: 
        <span>
          See the map below for a visualization of a part Image Manager's global
          footprint. For an interactive map, <a href="https://datastudio.google.com/embed/reporting/ec3bf210-888a-4bb2-a166-f40c152afd01/page/xYNXC"
          target="_blank" rel="noreferrer"> click on this link</a>.
        </span>
      ,
      // iframe: <iframe title="Image Manager's Global Footprint" src="https://datastudio.google.com/embed/reporting/ec3bf210-888a-4bb2-a166-f40c152afd01/page/xYNXC" allowFullScreen></iframe>,
      style: 1
    },
    //-- posnation.support
    {
      id: 'posnation-support',
      title: "posnation.support",
      summary:
        <span>
          <p>
            <hr />
            <b>A Technical Support Engineer Resource</b>
            <br />
            PWA
            <hr />
          </p>
        </span>
      ,
      
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
              <li>Web API Local Storage</li>
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
      media_description: 
        <span>
            <p>
            See the gif below where an API call to AWS S# Bucket is returning
            dynamic results. Check-it out live here, at <a href="https://posnation.support"
            target="_blank" rel="noreferrer">https://posnation.support</a>.
          </p>
        </span>
      ,
      img: "https://raw.githubusercontent.com/ErikPlachta/ErikPlachta/main/assets/images/posnation-support-example.gif",
      style: 1
    },
    //-- Calendari
    { id: 'Calendari',
      title: "Calendari",
      summary: 
        <span>
          <p>
            <hr />
            <b>Schedule Management</b>
            <br />
            Fullstack MERN SPA
            <hr />
          </p>
        </span>
      ,
      description:
        <span>
          <p>
            Calendari is a concept scheduling app, built with small business owners
            in mind. It gives you the ability to create account, and then provide
            a link to their customers to make appointments.
            <br /><br />
            I worked on this project with a some friends to help solidify my knowledge
            with React, GraphQL, and the MERN stack as a whole.
          </p>
        </span>
      ,
      nerd_notes:  
        <ul>
          <li><b>Platform</b>
            <ul>
              <li>Web App</li>
            </ul>
          </li>
          <li><b>Database</b>
            <ul>
              <li>MongoDB Atlas</li>
            </ul> 
          </li>
          <li><b>API</b>
            <ul>
              <li>Apollo / GraphQL</li>
            </ul>
          </li>
          <li><b>Framework</b>
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
              <li>Apollo / GraphQL</li>
              <li>Heroku</li>
            </ul>
          </li>
          <li><b>Features</b>
            <ul>
              <li>User Account Creation</li>
              <li>Online Scheduling</li>
              <li>PWA</li>
            </ul>
          </li>
        </ul>
      ,
      img: "https://raw.githubusercontent.com/ErikPlachta/ErikPlachta/bf895d9ae85684e58bc1bdffd3161555115dcb04/assets/images/calendari.gif",
      media_description: 
        <span>
          Below is a gif of the landing page. <a href="https://calendari-day.herokuapp.com"
          target="_blank" rel="noreferrer"> click on this link to see it live</a>.
        </span>
      ,
      // iframe: <iframe title="Image Manager's Global Footprint" src="https://datastudio.google.com/embed/reporting/ec3bf210-888a-4bb2-a166-f40c152afd01/page/xYNXC" allowFullScreen></iframe>,
      style: 1
    },
     //-- RESTful API Gateway
     {
      title: "RESTful API Gateway for a Concept Social Network",
      summary:
        <span>
          <p>
            <hr />
            <b>A ReSTful API Gateway</b>
            <br />
            Node/Express Server to MongoDB
            <hr />
          </p>
        </span>
      ,
      description: 
      <span>
        <p>
          I built this App because I wanted to learn more about using a NoSQL
          Database in collaboration with an Express server running on Node. I used
          MongoDB as my Database, and Mongoose as my ODM.
          <br />
          <br />
          The concept is a social network API platform that can be accessed VIA
          RESTful API calls. I built a basic API with full CRUD functionality
          regarding Users, Posts, and Comments on Posts. The API connects to a
          NoSQL Database, MonogoDB, so it can be fast, flexible, and allows for
          a large volumes of unstructured data.
        </p>
      </span>
      ,
      nerd_notes:  
        <ul>
          <li><b>Platform</b>
            <ul>
              <li>Node / Express</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
            </ul>
          </li>
          <li><b>Database</b>
            <ul>
              <li>MongoDB / MongoDB Atlas</li>
            </ul> 
          </li>
          <li><b>API</b>
            <ul>
              <li>Built Custom</li>
            </ul>
          </li>
          <li><b>Framework</b>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDb</li>
              <li>Mongoose.js</li>
            </ul>
          </li>
          <li><b>Key Features</b>
            <ul>
              <li>Custom Built RESTful API</li>
              <li>Social Media User Functionality</li>
            </ul>
          </li>
        </ul>
      ,
      url: "https://github.com/ErikPlachta/api-gateway-express-mongodb",
      url_description: "Click here to checkout GitHub!",
      media_description: 
        <span>
          <p>
            Below is a screen-shot of the Wiki I built for the API. You can
             <a href="https://github.com/ErikPlachta/api-gateway-express-mongodb/wiki"
            target="_blank" rel="noreferrer">see it here on the GitHub</a>.
          </p>
        </span>
      ,
      img: 'https://raw.githubusercontent.com/ErikPlachta/api-gateway-express-mongodb/main/public/images/api-gateway.png',
      style: 1
    },
    //-- My Budget Concept App
    {
      title: "A Budget Concept App"
        // <span>
        //   <p>
        //     My Budget Concept App 
        //     <br />
        //     <br />
        //   </p>
        // </span>
      ,
      summary:
        <span>
          <p>
            <hr />
            <b>A PWA with a Custom RESTful API</b>
            <br />
            Service Workers and Node/Express Server to MongoDB
            <hr />
          </p>
        </span>
      ,
      description: 
      <span>
        <p>
          A Budget concept PWA built to demonstrate a seamless user experience
          no matter the users network connection. Hosted on Heroku, running a
          Node/express.js server, no SQL Database with MongoDB. 
          <br />
          <br />
          If the user attempts to interact with the database and they are offline, 
          a Service Worker will intercept the request and record it to the browsers
          Cached Storage. When a network connection is restored, the database post
          will execute.
        </p>
      </span>
      ,
      nerd_notes:  
        <ul>
          <li><b>Platform</b>
            <ul>
              <li>Heroku</li>
              <li>Node / Express</li>
              <li>MongoDB Atlas</li>
              <li>Mongoose</li>
            </ul>
          </li>
          <li><b>Database</b>
            <ul>
              <li>MongoDB / MongoDB Atlas</li>
            </ul> 
          </li>
          <li><b>API</b>
            <ul>
              <li>Built Custom</li>
            </ul>
          </li>
          <li><b>Framework</b>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDb</li>
              <li>Mongoose.js</li>
            </ul>
          </li>
          <li><b>Key Features</b>
            <ul>
              <li>Custom Built RESTful API</li>
              <li>PWA with Offline Functionality</li>
            </ul>
          </li>
        </ul>
      ,
      url: "https://github.com/ErikPlachta/pwa-personal-budget",
      url_description: "Click Here to checkout the GitHub.",
      media_description: 
        <span>
          <p>
            Below is a giphy showing basic user functionality. If you want to
            learn more,  check out <a href="https://github.com/ErikPlachta/pwa-personal-budget"
            target="_blank" rel="noreferrer">the GitHub Repo for this app</a>. If
            you want to <a href="https://erikplachta-budget-pwa.herokuapp.com/#transaction-details"
            target="_blank" rel="noreferrer">see the app live, you can see it here</a>.
          </p>
        </span>
      ,
      img: "https://raw.githubusercontent.com/ErikPlachta/pwa-personal-budget/main/demo.gif",
      style: 1
    },
    //-- a Daily Scheudler
    {
      title: "A Daily Scheduler",
      summary:
        <span>
            <hr />
            <b>Web API Local Storage</b>
            <br />
            Web App - Hosted on GitHub Pages
            <hr />
          <p>
          </p>
        </span>
      ,
      description: 
        <span>
          <p>
            A concept app built to demonstrate the power and flexibility of the
            Web Storage API framework. Users have full CRUD functionality.
          </p>
        </span>
      ,
      nerd_notes:  
        <ul>
          <li><b>Platform</b>
            <ul>
              <li>GitHub Pages</li>
            </ul>
          </li>
          <li><b>Database</b>
            <ul>
              <li>Browser Local Storage</li>
            </ul> 
          </li>
          <li><b>API</b>
            <ul>
              <li>Moment.js</li>
              <li>Web Storage API</li>
            </ul>
          </li>
          <li><b>Framework</b>
            <ul>
              <li>HTML/CSS/JS</li>
            </ul>
          </li>
          <li><b>Key Features</b>
            <ul>
              <li>Data cached in local storage</li>
            </ul>
          </li>
        </ul>
      ,
      url_description: "Click here to checkout GitHub!",
      url: "https://github.com/ErikPlachta/a_Daily_Scheduler_WebApp",
      media_description: 
        <span>
          <p>
            Below is a giphy demonstrating the app in action. If you want to <a 
            href="https://github.com/ErikPlachta/a_Daily_Scheduler_WebApp"
            target="_blank" rel="noreferrer">learn more about this project,
            check out the GitHub Repo here</a>. If you want to <a
            href="https://erikplachta.github.io/a_Daily_Scheduler_WebApp/"
            target="_blank" rel="noreferrer">see it live, check it out here</a>.
          </p>
        </span>
      ,
      img: "https://raw.githubusercontent.com/ErikPlachta/a_Daily_Scheduler_WebApp/main/assets/images/demo.gif",
      style: 1,
    },
    //-- node-express-notes-app
    {
      title: "Note Taking Concept App",
      summary:
        <span>
          <p>
            <hr />
            <b>Node/Express Web App with JSON Database</b>
            <br />
            Web App - Hosted on Heroku
            <hr />
          </p>
        </span>
      ,
      description: 
        <span>
          <p>
            This is a Note Taking concept web APP built on Node with Express to
            manage API calls to a JSON database. It was built to demonstrate how
            Express.js can be used as an API gateway to a JSON database all 
            hosted on a Heroku server.
          </p>
        </span>
      ,
      nerd_notes:  
        <ul>
          <li><b>Platform</b>
            <ul>
              <li>Heroku</li>
            </ul>
          </li>
          <li><b>Database</b>
            <ul>
              <li>JSON</li>
            </ul> 
          </li>
          <li><b>Framework</b>
            <ul>
              <li>Node/Experss</li>
              <li>Heroku</li>
              <li>JSON</li>
              <li>HTML/CSS/JS</li>
            </ul>
          </li>
          <li><b>Key Features</b>
            <ul>
              <li>Express server talking to JSON database on Heroku</li>
            </ul>
          </li>
        </ul>
      ,
      url_description: "Click here to checkout GitHub!",
      url: "https://github.com/ErikPlachta/node-express-notes-app",
      media_description:
        <span>
          <p>
            In the giphy below I am demonstrating creating, and deleting a note.
            If you want to <a href="https://github.com/ErikPlachta/node-express-notes-app"
            target="_blank" rel="noreferrer"> learn more about this project, you
            can check out the GitHub repo here</a>. If you want to <a
            href="https://fast-peak-76189.herokuapp.com/" target="_blank"
            rel="noreferrer">see it live, you can see it here on Heroku</a>.
          </p>
        </span>
      ,
      img: "https://raw.githubusercontent.com/ErikPlachta/node-express-notes-app/main/public/assets/images/demo-full.gif",
      style: 1,
    }
  ])

  //-- BUILDING THE CONTENT
  return (
    <article className='container'>
      <section>
        <h2 className="article-header">Development Projects</h2>
      </section>
      
      <section className="article-content-container">
        <section className="article-content">
          <h3 className="article-content-title">
            Below I've included six my favorite development projects.
          </h3>
          <p className="article-content-indent">
            For each project, I included a short summary, highlighted the 
            key technical framework used, and included links.
          </p>
          <p>
            First on the list is <a href='#image-manager'><b>Image Manager</b>
            ( <em>a full-stack windows app</em> )</a> and  <a href="#posnation-support">
            <b>posnation.support</b> <em>( a full-stack web app )</em></a>.
          </p>
          <p className="article-content-indent">
            Both of these application have an active customer base with thousands
            of active users.
          </p>
          <p>
            The remaining four are proof-of-concept Apps that I've built
            while learning new concepts or sharpening my skills.
          </p>
          <p className="article-content-indent">
            Each one represents a unique aspect of my full stack web development
            experience.
          </p>
        </section>
      </section>

      <section className="article-content-container" id='projects-container'>
        { Projects.map( project => (
          // {number}
          <article
            id={project.id}
            key={uuidv4()}
            className={`projects-project ${( project.style === 1 && 'flex_100' ) || 'flex_50'}`}
            // id={project.title}
          >
            {/* title */}
            <div className="projects-head">
              <h3 className='projects-title'>{project.title}</h3>
              {project.summary ? <div className="projects-summary">{project.summary}</div> : null}
            </div>
            {/* About */}
            <div className="project-about article-content-indent">
              <h4 className='project-h4'>About</h4>
              {project.description}
            </div>
            {/* Nerd Notes */}
            <div className='nerd-notes article-content-indent-list'>
            <h4 className='project-h4'>Framework</h4>
              {project.nerd_notes}
            </div>
            
            
            {project.media_description ? <div className='article-content media_description'>{project.media_description}</div> : null}
            {project.img ? <img src={project.img} alt={project.title}></img> : <span><a href={project.url} target="_blank" rel="noreferrer">{project.url_description}</a></span>}
            {project.iframe ? project.iframe : null }


          </article>
        ))}
      </section>
    </article>
  )
}

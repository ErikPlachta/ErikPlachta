//------------------------------------------------------------------------------
  //-- IMPORTS
import React, { useState } from 'react'

//----------------------------------------------------------------------------
  //-- UTILS
import { capitalizeFirstLetter } from '../../utils/helpers';

//----------------------------------------------------------------------------
  //-- ASSETS
const projectData = require('../../assets/json/projects.json');

export default function Projects({ uuidv4 }) {

  //----------------------------------------------------------------------------
  //-- Loading Data from JSON
  const [myProjects, setMyProjects] = useState(projectData);

  //----------------------------------------------------------------------------
  //-- Return function
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
        {Object.keys(myProjects).map((project, index) => (

          <article
            id={project}
            key={uuidv4()}
            className={`projects-card ${( myProjects[project].style === 1 && 'flex_100' ) || 'flex_50'}`}
            // id={project.title}
            >
            {/* title */}
            <div className="projects-head">
              <h3 key={uuidv4()} className='projects-title'>{myProjects[project].title}</h3>
              {myProjects[project].summary 
                ? <div key={uuidv4()} className="projects-summary">{myProjects[project].summary}</div> 
                : null
              }
              {/* {myProjects[project].features 
                ? <div key={uuidv4()} className="projects-summary">{myProjects[project].features}</div> 
                : null
              } */}
              <span className='project-expand'>Expand</span>
            </div>
            {/* About */}
            <div className="project-about article-content-indent">
              <h4 className='project-h4'>About</h4>
              {myProjects[project].description}
            </div>
            {/* Nerd Notes */}
            <div className='nerd-notes article-content-indent-list'>
              <h4 className='project-h4'>Framework</h4>
              
              {/* itterate through sub values  */}
              {Object.keys(myProjects[project].nerd_notes).map((group, index) => ( 
                <span key={uuidv4()} className="project-technology-group">
                  <h5 key={uuidv4()}>{capitalizeFirstLetter(group)}</h5>
                  {/* sections within nerd_notes */}
                  {/* get values within each section within nerd_notes */}
                  <ul key={uuidv4()} className="project-framework">  
                    {Object.keys(myProjects[project].nerd_notes[group]).map((values, index) => ( 
                      <li
                        key={uuidv4()}
                      >
                        {myProjects[project].nerd_notes[group][values]}
                      </li>
                    ))}
                  </ul>
                </span>
              ))}

              {/* <p>
                <b>Platform</b>: {myProjects[project].nerd_notes.platform}
              </p>
              <p>
                <b>Database</b>: {
                myProjects[project].nerd_notes.database
                }
              </p> */}
            </div>

            { myProjects[project].media_description 
              ? <div className='article-content media-description'>
                  <a className='project-website'
                     href={myProjects[project].website}
                     target='_blank'
                     rel='noreferrer'
                     alt={myProjects[project].website_description}
                  >
                    {myProjects[project].media_description}
                  </a>
                </div> 
              : null
            }
            {
            myProjects[project].img 
              ? <img src={myProjects[project].img} alt={myProjects[project].title}></img>
              : <span>
                  <a href={myProjects[project].website}
                     target="_blank"
                     rel="noreferrer"
                     alt={myProjects[project].media_description}
                  >
                    {myProjects[project].website_description}
                  </a>
                </span>
            }
            {/* {project.iframe ? project.iframe : null } */}


          </article>
        ))}
      </section>
    </article>
  )
};

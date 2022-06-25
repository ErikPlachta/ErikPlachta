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
  //-- When click learn more... open modal
  // const expand = () => {
  //    document.querySelectorAll('.project-expand');
  //   console.log(expand)
  // };

  //----------------------------------------------------------------------------
  //-- Return function
  return (
    <article className='container'>
      <section>
        <h2 className="article-header">Projects</h2>
      </section>
      
      <section className="article-content-container">
        <section className="article-content">
          <h3 className="article-content-title">
            A few of Erik's favorite projects.
          </h3>
        </section>
      </section>

      
      {/* DYNAMICALLY BUILD CONTENT FROM JSON  */}
      <section className="article-content-container" id='projects-container'>
        {Object.keys(myProjects).map((project, index) => (

          <article
            id={project}
            key={uuidv4()}
            className={`projects-card ${( myProjects[project].style === 1 && 'flex_100' ) || 'flex_50'}`}
          >
            {/* TITLE AND SUMMARY */}
            <div className="projects-head">
              <h3 key={uuidv4()} className='projects-title'>{myProjects[project].title}</h3>
              {myProjects[project].summary 
                ? <div key={uuidv4()} className="projects-summary">{myProjects[project].summary}</div> 
                : null
              }
            </div>

          {/* ABOUT - Summary */}
            <div className="project-about article-content-indent">
              <h4 className='project-h4'>About</h4>
              <details>
                <summary>Learn more...</summary>
                {myProjects[project].description}
              </details>
            </div>
            
            {/* FRAMEWORK / NERD NOTES */}
            <div className='nerd-notes article-content-indent-list'>
              <h4 className='project-h4'>Framework</h4>
              <details>
                <summary>Learn more...</summary>
                {/* GET ALL FRAMEWORK DETAILS  */}
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
              </details>
            </div>
            

            { myProjects[project].media_description 
              ? <div className='article-content media-description'>
                  <a className='project-website'
                     href={myProjects[project].website}
                     target='_blank'
                     rel='noreferrer'
                     alt={myProjects[project].website_description}
                  >
                    <br />
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

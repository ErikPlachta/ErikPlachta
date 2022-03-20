import React from 'react'


export default function AboutMe({ uuid }) {
  return (
    <section className='container'>
      <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome-ie7.min.css" rel="stylesheet"></link>
      <h2>About Me</h2>
      <article className="content">
        <div>
          <h3>I'm a husband.</h3>
          <p className='about-me'>In 2014, I married my best friend; <em>Emily Plachta</em>.</p>
        </div>

        <div>
          <h3>I'm a software developer, IT engineer / director, project manager, and productivity nerd. <span className='icon-desktop icon' /></h3>
          
          <h4>When it comes to development, I enjoy building modular code.</h4>
          <p className='about-me'><em> Once you understand the problem, it's easy to build thoughtful, light-weight, and modular framework.</em></p>
        </div>
        
        <div>
          <h3> I'm a professional IT Engineer, and MSP Director <span className='icon-group icon' /> </h3>
          <p className='about-me'>I have over 10 years of experince managing and providing IT services to small businesses and large scale businesses.</p>
          <p className='about-me'>My expertise is in customer service, software support/training, hardware support, Windows, network infrastructure, and small business operating strategy.</p>
          <p className='about-me'>I also have a lot of experience in building/managing SaaS based MSP service models with an MVP service strategy built around automation and remote services.</p>
        </div>

        <div>
          <h3>I'm a professional IT Engineer, and MSP Director <span className='icon-group icon' /></h3>
          <p className='about-me'>Along with providing IT services, I build custom software solutions to automate what I can. Developing with Python and PowerShell is a part of my every-day job.</p>
          <p className='about-me'>In 2017, I also started working directly with a SQL Engineer to provide SQL support and services to remote clients. We primarily use Python, SQL, and PoweShel.</p>
        </div>

        <div>
          <h3>Secondary is JavaScript, CSS, and HTML  <span className='bi-globe icon' /> </h3>
          <p className='about-me'>For the past 2 years, I've been learning these languages to bridge the gap from backend and front. </p>
          <p className='about-me'>Currently taking classes at UNC Charlotte to expand my knowledge and build a solid foundation. </p>
        </div>

      </article>
    </section>
  )
}

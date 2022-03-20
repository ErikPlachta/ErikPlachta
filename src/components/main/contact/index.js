import React from 'react'

export default function Contact({ uuid }) {
  return (
    
        
    
    <article className='container'>
      
      <section>
        <h2 className="article-header">Contact Me</h2>
      </section>

      <section className="article-content">
        <p className="article-content-title">
          Do you want to get in touch?
        </p>
        <p className="article-content-indent">
          Fill out the form below, including anything you think I should know, 
          and I'll reach back out to you!
        </p>
      </section>
    

      <section className="article-content">
        <form className="contact-form">

          <div className='form-section'>
            
            <span className="form-element">
              <label name="fullname">Name</label>
              <input name="full-name" type="text" required />
            </span>
            <span className="form-element">
              <label name="email">Email</label>
              <input name="email" type="email" required />
            </span>
            <span className="form-element">
              <label name="phone">Phone</label>
              <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </span>

          </div>


          <span className="form-element">
            <label name="reason">What did you want to talk about?</label>
            <select id='reason' name='reason' size='1'>
              <option>Personal</option>
              <option>Professional</option>
            </select>
          </span>
          {/* TODO: 03/20/2022 #EP || ADD TOGGLE */}
          {/* <div id="user-form">
            <div className="checkboxes">
              <label for="toggle">Toggle</label>
              <input type="checkbox" id="toggle" className="toggle"/>
            </div>
          </div>, */}

          <span className="form-element">
            <label name="message">Message</label>
            <textarea name="message" type="textarea" rows='10' required></textarea>
          </span>
        </form>
      </section>
  </article>
  )
}

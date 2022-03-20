import React from 'react'

export default function Contact({ uuid }) {
  return (
    <article className='container'>
      
    <section>
      <h2 className="article-header">Contact Me</h2>
    </section>
    
    <section>

      <div className="article-content">
        <p className="article-content-title">
          Do you want to get in touch?
        </p>
        <p className="article-content-indent">
          Fill out the form below, including anything you think I should know, 
          and I'll reach back out to you!
        </p>
      </div>

      <div className="article-content">
        <form className="contact-form">

          <div className='form-section'>
            
            <span className="form-element">
              <label name="fullname">Name</label>
              <input name="full-name" type="text" required></input>
            </span>
            <span className="form-element">
              <label name="email">Email</label>
              <input name="email" type="email" required></input>
            </span>
            <span className="form-element">
              <label name="phone">Phone</label>
              <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
            </span>

          </div>


          <span className="form-element">
            <label name="reason">Reason</label>
            <input name="Reason" type="text" required></input>
          </span>

          <span className="form-element">
            <label name="message">Message</label>
            <textarea name="message" type="textarea" required></textarea>
          </span>
        </form>
      </div>
    </section>
  </article>
  )
}

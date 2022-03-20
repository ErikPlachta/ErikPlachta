import React from 'react';
import '../../../assets/css/toggle.css'


const handleSubmit = e => {
  console.log(e)
  e.preventDefault();

};


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
      </section>
    

      <section className="article-content-container contact-form">
        <form onSubmit={handleSubmit}>

          <div className='form-section'>
            
            <span className="form-element">
              <label htmlFor="fullname">Full Name</label>
              <input name="fullname" id="fullname" type="text" placeholder="What should I call you?" required />
            </span>
            <span className="form-element">
              <label htmlFor="email">Email Address</label>
              <input name="email" id="email" type="email" placeholder="your@email.com" required />
            </span>
            <span className="form-element">
              <label htmlFor="phone">Phone Number</label>
              <input name="phone" id="phone" type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            </span>

          </div>


          <span className="form-element">
            <label htmlFor="reason">Subject</label>
            <select id='subject' name='subject' size='3' required>
              <option value="none" selected disabled hidden>Select an Option</option>
              <option value="social">Social</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
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
            <label htmlFor="message">Message</label>
            <textarea name="message" type="textarea" rows='10' placeholder="I'm reaching out because..." required></textarea>
          </span>

          <span className="form-element"> 
            <input type="submit" className="button" id="contact-me-submit" value="Submit" />
          </span>
        </form>
      </section>
  </article>
  )
}

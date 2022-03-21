import React, { useState } from 'react';
// import '../../../assets/css/toggle.css'
import { send } from 'emailjs-com';


export default function Contact({ uuid }) {

  //-- preventing default
  const handleSubmit = e => {
    console.log(e)
    e.preventDefault();
  
  };

  //-- managing sending email
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Erik Plachta',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_g06t4eg',
      'template_rg1kx7u',
      toSend,
      'gJH1FFdLLZ-ojMYbQ'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };



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
        <form onSubmit={onSubmit}>

          <div className='form-section'>
            
            <span className="form-element">
              <label htmlFor="from_name">Your Name</label>
              <input
                name='from_name'
                id="from_name"
                type='text'
                placeholder='from...'
                value={toSend.from_name}
                onChange={handleChange}
              />
            </span>
            <span className="form-element">
              <label htmlFor="email">Email Address</label>
              <input
                name="reply_to"
                id="email"
                type="email"
                placeholder='your@email.com'
                required
                value={toSend.reply_to}
                onChange={handleChange}
              />
            </span>
            <span className="form-element">
              <label htmlFor="phone">Phone Number</label>
              <input name="phone" id="phone" type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            </span>

          </div>


          <span className="form-element">
            <label htmlFor="reason">Subject</label>
            <select id='subject' name='subject' size='3' required>
              <option value="none" defaultValue disabled hidden>Select an Option</option>
              <option value="social">Social</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </select>
          </span>
        

          <span className="form-element">
            <label htmlFor="message">Message</label>
            <textarea
              name='message'
              type="textarea"
              rows='10'
              placeholder="I'm reaching out because..."
              required
              value={toSend.message}
              onChange={handleChange}
              ></textarea>
          </span>

          <span className="form-element"> 
            <input type="submit" className="button" id="contact-me-submit" value="Submit" />
          </span>
        </form>
      </section>


  </article>
  )
}



{/* TODO: 03/20/2022 #EP || ADD TOGGLE */}
          {/* <div id="user-form">
            <div className="checkboxes">
              <label for="toggle">Toggle</label>
              <input type="checkbox" id="toggle" className="toggle"/>
            </div>
          </div>, */}
import React, { useState } from 'react';
// import '../../../assets/css/toggle.css'
import { send } from 'emailjs-com';
// import { Captcha } from 'reactjs-captcha';

import ReCAPTCHA from "react-google-recaptcha";


import{ init } from '@emailjs/browser';
init(process.env.REACT_APP_EMAILJS_USER_ID);


export default function Contact({ uuid }) {

  const recaptchaRef = React.createRef();


  //-- managing sending email
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Erik Plachta',
    from_phone: '',
    message: '',
    reply_to: '',
    'g-recaptcha-response': '',
  });

  //-- setting captcha value to send params
  // const [recaptcha, setRecaptcha] = useState (e => { toSend['g-recaptcha-response'] = e});

  const onSubmit = (e) => {
    e.preventDefault();
    
    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      toSend,
      process.env.REACT_APP_EMAILJS_USER_ID,
    )
      .then((response) => {
        // console.log('SUCCESS!', , response.text);
        alert(`${response.status} - ${response.text}`)
        
      })
      //-- clear form
      .then( () => {
        window.location.reload(false);

      })
      .catch((err) => {
        // console.log('FAILED...', err);
        alert(`ERROR: Message did not send: - ${err.status}`,err)
      });
  };


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value,  });
  };

  function onKeyUpPhone(e){

    //-- if trying to erase, don't try to format
    if(e.key === "Backspace" || e.key === 'Delete'){ return null;}
     
    //-- extract value
     const phoneIn = e.target.value;
     //-- get current stored value
    //  const phoneCurrent = toSend.from_phone;
     
     //-- if nothing just exit
     if(!phoneIn) return;

    //-- clean it up  
    const digits = phoneIn.replace(/\D/g, '');

    //-- format it
    // const formattedDigits = (digits.substring(0,1) + '(' + digits.substring(1,4) + ')' + digits.substring(4,7) + '-' + digits.substring(7,11));
    const formattedDigits = ('(' + digits.substring(0,3) + ')' + digits.substring(3,7) + '-' + digits.substring(7,11));
    
    //-- update ui input
    e.target.value = formattedDigits;
    //-- update data to send
    toSend.from_phone = formattedDigits;
    return null;
  }

  const formatPhone= (e) => {
    //-- extract value
    const phoneIn = e.target.value;
    //-- if nothing just exit
    if(!phoneIn) return;
    
    //-- strip spec characters
    var phoneInCleaned = ('' + phoneIn).replace(/\D/g, '')
    //-- format
    var match = phoneInCleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
      if (match) {
        console.log(match)
        toSend.from_phone = '(' + match[1] + ') ' + match[2] + '-' + match[3];
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    } 
    return null;
  };

  //-- JSX
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

      {/*Email Form with captcha */}
      <section className="article-content-container contact-form">
        <form onSubmit={onSubmit}>
          <div className='form-section'>
            
            {/* name */}
            <span className="form-element">
              <label htmlFor="from_name">Your Name</label>
              <input
                name='from_name'
                id="from_name"
                type='text'
                placeholder='from...'
                required
                onChange={handleChange}
                value={toSend.from_name}
              />
            </span>
            {/* email */}
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
            {/* phone */}
            <span className="form-element">
              <label htmlFor="phone">Phone Number</label>
              <input
                name="phone"
                id="phone"
                type="tel"
                aria-label="Please enter your phone number"
                placeholder="ex. 1(111)-111-1111"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                // onKeyDown={onKeyDownPhone}
                onKeyUp={onKeyUpPhone}
                // value={toSend.from_phone}
              />
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

          <span className="form-element" id='recaptcha'>
            {/* Captcha*/}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
              onChange={e => (toSend['g-recaptcha-response']=e)}
            />
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
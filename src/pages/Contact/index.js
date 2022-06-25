import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
//-- email.js onboarding
import { send } from 'emailjs-com';
import{ init } from '@emailjs/browser';
init(process.env.REACT_APP_EMAILJS_USER_ID);


// import '../../../assets/css/toggle.css' //-- TOOD:: 03/27/2022 #EP | Add Toggle
// import { Captcha } from 'reactjs-captcha';

//-- contact form function
export default function Contact({ uuid }) {

  //-- reference variable for the captcha result response code
  const recaptchaRef = React.createRef();
  //-- managing sending email
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Erik Plachta',
    from_phone: '',
    message: '',
    reply_to: '',
    subject: '',
    'g-recaptcha-response': '',
  });

  //-- when submitting form, send to email.js
  const onSubmit = (e) => {
    e.preventDefault();
    
    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT,
      toSend,
      process.env.REACT_APP_EMAILJS_USER_ID,
    )
      // .then((response) => {
      //   // console.log('SUCCESS!', , response.text);
      //   // alert(`${response.status} - ${response.text}`)
        
      // })
      //-- clear form and re-navigate
      .then( () => {
        //-- TODO:: 03/27/2022 #EP || MAKE A UI MESSAGE
        window.location.reload(false);

      })
      .catch((err) => {
        console.log(`ERROR: ${err.status} . FAILED TO SEND MSG - Check your internet connection...`);
        // alert(`ERROR: Message did not send: - ${err.status}`,err)
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
    // const formattedDigits = (digits.substring(0,1) + '(' + digits.substring(1,4) + ')' + digits.substring(4,7) + '-' + digits.substring(7,11)); //-- with area code
    const formattedPhone = ('(' + digits.substring(0,3) + ')' + digits.substring(3,6) + '-' + digits.substring(6,10)); //-- without area-code

    // console.log(formattedPhone.length)
    
    //-- inline styling so red border until good.
    var input = e.target;
    var isError = ( (formattedPhone.length) < 13 );
    var color =  (isError) ? "red" : "grey";
    var borderWidth =  (isError)? "3px" : "1px"; 
    input.style.borderColor = color;
    input.style.borderWidth = borderWidth;
   
    
    //-- update ui input
    e.target.value = formattedPhone;
    //-- update data to send
    toSend.from_phone = formattedPhone;
    return null;
  }

  //-- JSX
  return (
    <article className='container'>
      <section>
        <h2 className="article-header">Contact Me</h2>
      </section>
      <section className="article-content">
        <p className="article-content-title">
          If you want to get in touch with Erik, you can reach out to him via the
          contact form below or the social links within the footer.
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
                autoComplete='given-name'
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
                autoComplete="email"
                onChange={handleChange}
                value={toSend.reply_to}
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
                placeholder="ex. (111)-111-1111"
                autoComplete='tel'
                onKeyUp={onKeyUpPhone}
                // value={toSend.from_phone} //-- not needed, defined above in cleanup function.
              />
            </span>
          </div>

          <span className="form-element">
              <label htmlFor="from_name">Subject</label>
              <input
                name='subject'
                id="subject"
                type='text'
                placeholder='Job Opportunity'
                required
                onChange={handleChange}
                value={toSend.subject}
              />
            </span>
          {/* <span className="form-element">
            <label htmlFor="reason">Subject</label>
            <select id='subject' name='subject' size='3'>
              <option value="none" defaultValue disabled hidden > Select an Option </option>
              <option value="social"> Social </option>
              <option value="work"  > Work   </option>
              <option value="other" > Other  </option>
            </select>
          </span> */}

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

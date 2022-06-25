import React, { useState } from 'react'
//-- Using for contact form captcha verification
import ReCAPTCHA from "react-google-recaptcha";
//-- Onboarding emailjs to send me an email when form filed out
import { send } from 'emailjs-com';
import{ init } from '@emailjs/browser';
//-- initializing the emailjs with my user_id in env variables
init(process.env.REACT_APP_EMAILJS_USER_ID);
//-- logic for contact form


export default function Resume({ uuid }) {

  //-- reference variable used with captcha
  const recaptchaRef = React.createRef();
  //-- managing sending email
  const [toSend, setToSend] = useState({
      from_name: '',
      to_name: 'Erik Plachta',
      from_phone: '',
      from_company_position: '',
      from_company: '',
      from_company_website: '',
      subject: '',
      message: '',
      reply_to: '',
      'g-recaptcha-response': '',
  });

  //-- when submitting form, make request to email.js to send me an email
  const onSubmit = (e) => {
    e.preventDefault();

    send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_RESUME,
        toSend,
        process.env.REACT_APP_EMAILJS_USER_ID,
    )
        // .then((response) => {
        // //-- TODO:: 03/27/2022 #EP || Update response workflow
        // alert(`${response.status} - ${response.text}`)
        // })
        //-- navigate back to home
        .then( () => {
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(`ERROR: ${err.status} . FAILED TO SEND MSG - Check your internet connection...`);
        // alert(`ERROR: Message did not send: - ${err.status}`,err)
        });
  };
  //-- As changes happen, ensure what's being sent is up-to-date in the toSend OBJ
  const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value,  });
  };
  //-- Editing input after typing 
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
  
  return (
    //-- Header section with note
    <article className='container'>
      
      <section>
        <h2 className="article-header">Resume</h2>
      </section>

      <section className="article-content-container">    
        <div className="article-content">
          <h3 className="article-content-title">
            Technical Support Director and Full-Developer, and Software Engineer
          </h3>
          <hr />
          {/* Technical Support Director */}
          <p className="article-content-indent">
            <b>As a technical support director</b>, I define and execute strategies
            to ensure my team stays focused on providing services our customer
            deserve. I also build and the manage a knowledge base for my team
            regarding technical services, software solutions, and company
            policies / procedures.
          </p>
          <hr />
          {/* Software Engineer */}
          <p className="article-content-indent">
            <b>As a software engineer and full-stack developer</b>, I use my
            experience and knowledge to build and manage software solutions that
            resolve IT related issues <u> proactively</u>, <u>automatically</u>,
            and <u>remotely</u>.
          </p>
          < hr/>
          <p className='article-content-indent'>
            <b>Soft Skills:</b>
            <br />
            Communication, empathy, self-awareness, problem-solving, patient,
            dedication, focus, passion, flexibility, organized, time management,
            teachable, driven, leadership.
          </p>
          
          <p className='article-content-indent'>
            <b>Hard Skills:</b>
            <br />
            IT automation, IT & Networking, Customer Service, Software &
            Hardware Support, MSP Strategy, Documentation, Project Management,
            DevOps, Full-stack Development, Python, PowerShell, JavaScript,
            HTML, CSS, SQL, MySQL, MongoDB, AWS, GCP, Heroku, and GitHub.
          </p>

            </div>
      </section>

        <section className="article-content">
          {/* REQUEST RESUME SECTION */}
          <div className="article-content">
            <br />
            <h3 className="article-content-title">
              Request a Copy of My Resume
            </h3>
            <p className="article-content-indent">
              
            </p>
          </div>
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
                autoComplete='given-name'
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
                autoComplete="email"
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
                onKeyUp={onKeyUpPhone}
                autoComplete='tel'
              />
            </span>

            <span className="form-element">
              <label htmlFor="from_company">Company Name</label>
              <input
                name='from_company'
                id="from_company"
                type='text'
                placeholder="Your company name"
                required
                onChange={handleChange}
                value={toSend.from_company}
              />
            </span>

            <span className="form-element">
              <label htmlFor="from_company">Company Website</label>
              <input
                name='from_company_website'
                id="from_company_website"
                type='url'
                placeholder="Please include your website if you have one"
                onChange={handleChange}
                value={toSend.from_company_website}
              />
            </span>

            <span className="form-element">
              <label htmlFor="from_company_position">Position</label>
              <input
                name='from_company_position'
                id="from_company_position"
                type='text'
                placeholder="Your official title"
                required
                onChange={handleChange}
                value={toSend.from_company_position}
              />
            </span>
          </div>

          <span className="form-element">
              <label htmlFor="from_name">Subject</label>
              <input
                name='subject'
                id="subject"
                type='text'
                placeholder="Recruiter, Employer"
                required
                onChange={handleChange}
                value={toSend.subject}
              />
            </span>

          <span className="form-element">
            <label htmlFor="message">Message</label>
            <textarea
              name='message'
              type="textarea"
              rows='10'
              placeholder="I'm requesting your resume because..."
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

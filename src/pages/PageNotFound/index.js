import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function PageNotFound({setLocation}) {
  let navigate = useNavigate();

  const navigateHome = (event) => {
    event.preventDefault();
    setLocation("about");
    document.title = `About - Erik Plachta`;
    
    navigate("/", {replace: true})
  }

  return (
    <article className='container'>
      {/* header banner */}
      <section>
        <h2 className="article-header">404 - Page Not Found</h2>
      </section>      
      {/* content */}
      <section className="article-content-container">
        <div className="article-content">
          <h3 className="article-content-title">
            Looks like you're trying to navigate to a page that does not exist!
          </h3>
          <p>
          
          <Link to='/'>
            <span className="form-element"> 
              <input 
                type="submit"
                className="button"
                id="404-submit"
                value="Take Me Home"
                onClick={ navigateHome }
                />
            </span>
          </Link>
          </p>
        </div>
      </section>
    </article>
  )
};

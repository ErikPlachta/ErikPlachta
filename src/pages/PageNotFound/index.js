import React from 'react';

export default function PageNotFound({ uuidv4 }) {
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
            Looks like you're trying to navigate to a page that does not exist.
          </h3>
        </div>
      </section>
    </article>
  )
};

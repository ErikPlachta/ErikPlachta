import React from 'react'

export default function Footer({ uuid }) {
  return (
    <footer>

      <section className='footer-copyright'>
        Erik Plachta - 2021 ©
      </section>
      <section className='footer-social'>
        <span className="nav">
          <a href="https://www.github.com/erikplachta" target="_blank" rel="noreferrer" >GitHub</a>
        </span>
        <span className="nav">
          <a href="https://www.linkedin.com/e/erikplachta" target="_blank" rel="noreferrer" >Linked-In</a>
        </span>
        <span className="nav">
          <a href="https://www.twitter.com/erikplachta" target="_blank" rel="noreferrer" >Twitter</a>
        </span>
        <span className="nav">
          <a href="https://blog.erikplachta.com/" target="_blank" rel="noreferrer" >Medium</a>
        </span>
        </section>
    </footer>
  )
}

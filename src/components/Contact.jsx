import React from 'react'

export default function Contact() {
    
  return (
    <section id="contact" className="Section">
      <div className="container">
        <h2 className="Section_title">Contact</h2>
        <p className="Section_lead">
          Want to work together? Send me a message or connect on LinkedIn.
        </p>

        <div className="Contact_cards">
          <a className="Contact_card" href="mailto:you@example.com">
            <h3>Email</h3>
            <p>darshgames.salecha@gmail.com</p>
          </a>

          <a
            className="Contact_card"
            href="https://discord.com/users/857261216371179540"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Discord</h3>
            <p>Contacting me on discord</p>
          </a>

          <a
            className="Contact_card"
            href="https://github.com/Darsheels"
            target="_blank"
            rel="noreferrer"
          >
            <h3>GitHub</h3>
            <p>Check out my projects on GitHub</p>
          </a>

          

        </div>
      </div>
    </section>
  )
}

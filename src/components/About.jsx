import React from 'react'

export default function About() {
  return (
    <section id="about" className="Section">
      <div className="container">
        <h2 className="Section_title">About</h2>
        <p className="Section_lead">
          I’m a frontend developer who enjoys building clean, accessible UI and
          collaborating with teams to ship products users love.
        </p>

        <div className="About_grid">
          <div className="About_card">
            <h3>Skills</h3>
            <ul>
              <li>React + Vite</li>
              <li>TypeScript + JavaScript</li>
              <li>CSS / Tailwind</li>
              <li>Express Js</li>
              <li>PostgreSQL</li>
              <li>Python + Libraries (pygame, tkinter)</li>
            </ul>
          </div>
          <div className="About_card">
            <h3>Tools</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>Figma / UI Design</li>
              <li>Testing (Vitest / Testing Library)</li>
              <li>CI / CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

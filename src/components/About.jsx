import React from 'react'

export default function About() {
  return (
    <section id="about" className="Section">
      <div className="container">
        <h2 className="Section_title">About</h2>
        <p className="Section_lead">
          I have worked on a variety of projects, from personal websites to the development of applications and Video Games. I am always looking for new challenges and opportunities to learn and grow as a developer.
        </p>

        <div className="About_grid">
          <div className="About_card">
            <h3>Skills</h3>
            <ul>
              <li>Modular architecture design</li>
              <li>Version control workflows</li>
              <li>Problem‑solving</li>
              <li>algorithmic thinking</li>
              <li>Full-Stack Web Development</li>
              <li>Game Development</li>
              <li>Data handling and management</li>
            </ul>
          </div>
          <div className="About_card">
            <h3>Tools</h3>
            <ul>
              <li>Postman</li>
              <li>Aseprite</li>
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Terminal/Windows/Linux</li>
              <li>React/Vite</li>
              <li>Pygame</li>
              <li>Tkinter</li>
              <li>Tiled</li>
              <li>Postegres SQL</li>
            </ul>
          </div>
           <div className="About_card">
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>Lua</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

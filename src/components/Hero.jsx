import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="Section Hero">
      <div className="container">
        <div className="Hero_inner">
          <h1 className="Hero_title">Hi, I'm Darsheel</h1>
          <p className="Hero_subtitle">
            I build modern web experiences with React, Vite, and thoughtful design also having a good knowledge in python and have worked and made a few projects with a few libraries within it like pygame and tkinter
          </p>
          <div className="Hero_actions">
            <a className="Button primary" href="#projects">
              View projects
            </a>
            <a className="Button secondary" href="#contact">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

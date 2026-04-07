import React from 'react'
import PersonalPicture from '../assets/PersonalPicture.jpg'

export default function Hero() {
  return (
    <section id="home" className="Section Hero">
      <div className="container">
        <div className="Hero_inner">
          <div className="Hero_header">
            <h1 className="Hero_title">Hi, I'm Darsheel</h1>
            <img className='PersonalPicture' src={PersonalPicture} alt="Darsheel Salecha" />
          </div>
          <p className="Hero_subtitle">
            I am a freelance developer with a passion for creating beautiful and functional websites , programs, video games and CyberSecurity/Ethical Hacking. I have experience in Powershell , Windows and Linux OS , HTML, CSS, JavaScript, Python  , Express and React with multiple other python libraries like pygame and tkinter. I am always looking for new projects to work on and new clients to collaborate with.
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

import React from "react";
import portfolioimg from "../assets/portfolioimg.jpg";

export default function Hero() {
  return (
    <section id="home" className="Section Hero">
      <div className="container">
        <div className="Hero_inner">
          <div className="Hero_content">
            <h1 className="Hero_title">Hi, I'm Darsheel</h1>
            <p className="Hero_subtitle">
              I’m a developer focused on turning ideas into real-world projects.
              I enjoy building software, experimenting with new technologies,
              and solving problems that require both creativity and technical
              thinking. From web applications and cybersecurity tools to games
              and backend systems, I like challenging myself to learn whatever
              is necessary to bring an idea to life. I’m constantly expanding my
              skills in software engineering, AI, and cybersecurity, with the
              goal of becoming someone who can take an idea from concept to a
              fully working product.
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
          <img
            className="PersonalPicture"
            src={portfolioimg}
            alt="Darsheel Salecha"
          />
        </div>
      </div>
    </section>
  );
}

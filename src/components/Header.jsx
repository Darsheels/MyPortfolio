import React from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="Header">
      <div className="Header_inner container">
        <a className="Header_logo" href="#home">
          <span className="Header_logoMark" aria-hidden="true">
            💼
          </span>
          <span className="Header_name">Darsheel Salecha</span>
        </a>

        <nav className="Header_nav" aria-label="Primary">
          <ul className="Header_navList">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="Header_navLink" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
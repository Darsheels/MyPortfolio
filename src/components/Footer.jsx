import React from 'react'

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="container Footer_inner">
        <p>
          © {new Date().getFullYear()} Darsheel Salecha
        </p>
      </div>
    </footer>
  )
}

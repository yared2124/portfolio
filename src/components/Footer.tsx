import React from 'react'

interface FooterProps {
  name: string
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>© {currentYear} {name}. All rights reserved.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  )
}

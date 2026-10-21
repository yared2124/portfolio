import React from 'react'

interface FooterProps {
  name: string
}

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>© {CURRENT_YEAR} {name}. All rights reserved.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  )
}

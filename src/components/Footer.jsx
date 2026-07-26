import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>© {currentYear} Mohan Boddu. All rights reserved.</span>
      <span className="footer-status">
        <span className="dot"></span>
        Available for opportunities
      </span>
    </footer>
  );
}

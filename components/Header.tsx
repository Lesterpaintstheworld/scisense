import React from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <Link href="/" className="logo-link">
            <span className="logo-text">SciSense</span>
            <span className="logo-tagline">Making Science make sense</span>
          </Link>
        </div>
        <nav className="desktop-nav">
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/case-studies">Projets</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

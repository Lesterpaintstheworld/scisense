'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button 
        className="mobile-menu-toggle" 
        aria-label="Menu" 
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <button 
              className="mobile-menu-close" 
              aria-label="Fermer" 
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
          <nav className="mobile-menu-nav">
            <ul>
              <li><Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
              <li><Link href="/about" onClick={() => setIsOpen(false)}>À propos</Link></li>
              <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link href="/case-studies" onClick={() => setIsOpen(false)}>Projets</Link></li>
              <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
          <div className="mobile-menu-footer">
            <div className="mobile-brand">SciSense - Making Science make sense</div>
            <div className="mobile-menu-buttons">
              <Link href="/contact" className="button" onClick={() => setIsOpen(false)}>
                Prendre rendez-vous
              </Link>
              <Link href="/about" className="button button-secondary" onClick={() => setIsOpen(false)}>
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

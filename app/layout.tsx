import React from 'react';
import Link from 'next/link';
import '../assets/css/main.css';

export const metadata = {
  title: 'Aurore Inchauspé - Consultante en Affaires Scientifiques & Médicales',
  description: 'Expertise en stratégies médico-scientifiques internationales, gestion de réseaux KOL et applications d\'IA pour la recherche scientifique',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
      </head>
      <body>
        <header>
          <div className="container header-container">
            <div className="logo">
              <Link href="/">Aurore Inchauspé</Link>
            </div>
            <nav>
              <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/about">À propos</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/case-studies">Projets</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
            <button className="mobile-menu-toggle" aria-label="Menu">☰</button>
          </div>
        </header>

        {children}

        <footer>
          <div className="container">
            <div className="footer-grid">
              <div className="footer-column">
                <h3>Aurore Inchauspé</h3>
                <p>Consultante en Affaires Scientifiques &amp; Médicales spécialisée dans les stratégies médico-scientifiques internationales et l'IA pour la recherche.</p>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="footer-column">
                <h3>Navigation</h3>
                <ul className="footer-links">
                  <li><Link href="/">Accueil</Link></li>
                  <li><Link href="/about">À propos</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/case-studies">Projets</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Services</h3>
                <ul className="footer-links">
                  <li><Link href="/services#strategy">Stratégie Médicale Internationale</Link></li>
                  <li><Link href="/services#kol">Gestion de Réseaux KOL</Link></li>
                  <li><Link href="/services#ai">IA pour la Recherche</Link></li>
                  <li><Link href="/services#communication">Communication Scientifique</Link></li>
                  <li><Link href="/services#training">Formation Médicale</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Contact</h3>
                <p>Pour toute demande de collaboration ou d'information, n'hésitez pas à me contacter.</p>
                <Link href="/contact" className="button">Prendre rendez-vous</Link>
              </div>
            </div>
            <div className="copyright">
              &copy; {new Date().getFullYear()} Aurore Inchauspé. Tous droits réservés.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

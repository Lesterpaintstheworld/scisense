import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Contact</h1>
          <p className="hero-tagline">Discutons de votre projet</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2>Prendre contact</h2>
              <p>
                Vous souhaitez discuter d'un projet, obtenir plus d'informations sur mes services ou simplement échanger 
                sur les affaires scientifiques et médicales? N'hésitez pas à me contacter via le formulaire ci-contre 
                ou directement par email ou téléphone.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3>Informations de contact</h3>
                <p>
                  <strong>Email:</strong> contact@aurore-inchauspe.com<br />
                  <strong>Téléphone:</strong> +33 (0)6 XX XX XX XX<br />
                  <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">Aurore Inchauspé</a>
                </p>
              </div>
              
              <div>
                <h3>Horaires de disponibilité</h3>
                <p>
                  Du lundi au vendredi, de 9h à 18h (CET).<br />
                  Possibilité de rendez-vous en dehors de ces horaires sur demande.
                </p>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <h3 id="newsletter">S'abonner à la newsletter</h3>
                <p>
                  Recevez mes derniers articles, analyses et actualités directement dans votre boîte mail.
                </p>
                <form className="contact-form" style={{ padding: '1rem', marginTop: '1rem' }}>
                  <div className="form-group">
                    <input type="email" id="newsletter-email" name="newsletter-email" placeholder="Votre adresse email" required />
                  </div>
                  <button type="submit" className="button">S'abonner</button>
                </form>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Formulaire de contact</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Téléphone (optionnel)</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select id="subject" name="subject" required>
                    <option value="">Sélectionnez un sujet</option>
                    <option value="strategie">Stratégie Médicale Internationale</option>
                    <option value="kol">Gestion de Réseaux KOL</option>
                    <option value="ia">IA pour la Recherche</option>
                    <option value="communication">Communication Scientifique</option>
                    <option value="formation">Formation Médicale</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                
                <div className="form-group">
                  <label>
                    <input type="checkbox" name="privacy" required />
                    J'accepte que mes données soient utilisées uniquement dans le cadre de ma demande de contact
                  </label>
                </div>
                
                <button type="submit" className="button">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Foire aux questions</h2>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3>Dans quels secteurs intervenez-vous principalement?</h3>
              <p>
                J'interviens principalement dans les secteurs pharmaceutique, biotechnologique, nutraceutique et cosmétique, 
                mais mon expertise est applicable à tout domaine nécessitant une communication scientifique rigoureuse et stratégique.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3>Proposez-vous des services à l'international?</h3>
              <p>
                Absolument. Avec une expérience dans plus de 10 pays, je propose des services adaptés aux contextes internationaux, 
                en tenant compte des spécificités réglementaires et culturelles locales.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3>Comment se déroule une collaboration type?</h3>
              <p>
                Chaque collaboration débute par une phase d'analyse approfondie de vos besoins, suivie de l'élaboration d'une 
                proposition sur mesure. Après validation, nous mettons en œuvre la stratégie définie ensemble, avec un suivi 
                régulier et des ajustements si nécessaire.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3>Quels sont vos délais d'intervention?</h3>
              <p>
                Les délais varient selon la nature et l'ampleur du projet. Pour une consultation ponctuelle, je peux généralement 
                intervenir sous 1 à 2 semaines. Pour des projets plus complexes, nous établirons ensemble un calendrier adapté à vos contraintes.
              </p>
            </div>
            
            <div>
              <h3>Proposez-vous des formations en entreprise?</h3>
              <p>
                Oui, je propose des formations sur mesure pour les équipes commerciales, marketing et scientifiques, adaptées 
                à différents niveaux d'expertise et aux besoins spécifiques de votre organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client-side script for form handling */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Simple form validation and submission handling
            const contactForm = document.querySelector('.contact-form form');
            const newsletterForm = document.querySelector('#newsletter-email').closest('form');
            
            if (contactForm) {
              contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // In a real implementation, you would send the form data to your backend
                alert('Merci pour votre message! Je vous répondrai dans les plus brefs délais.');
                contactForm.reset();
              });
            }
            
            if (newsletterForm) {
              newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // In a real implementation, you would send the email to your newsletter service
                alert('Merci pour votre inscription à la newsletter!');
                newsletterForm.reset();
              });
            }
          });
        `
      }} />
    </main>
  );
}

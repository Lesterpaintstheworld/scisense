import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Aurore Inchauspé</h1>
          <h2>Consultante en Affaires Scientifiques &amp; Médicales</h2>
          <p className="hero-tagline">Excellence scientifique. Vision stratégique. Impact international.</p>
          <div>
            <Link href="/contact" className="button">Prendre rendez-vous</Link>
            <Link href="/about" className="button button-secondary">En savoir plus</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Expertise</h2>
          </div>
          <p className="text-center">Spécialiste de la communication scientifique et des stratégies médico-marketing, je transforme la complexité scientifique en avantage stratégique pour votre organisation.</p>
          
          <div className="services">
            <div className="service-card">
              <h3>Stratégie Médicale Internationale</h3>
              <p>Développement et implémentation de stratégies médico-scientifiques dans plus de 10 pays, adaptées aux spécificités réglementaires et culturelles locales.</p>
            </div>
            <div className="service-card">
              <h3>Gestion de Réseaux KOL</h3>
              <p>Création et animation de réseaux d'experts médicaux pour faciliter l'échange de données cliniques et renforcer votre positionnement scientifique.</p>
            </div>
            <div className="service-card">
              <h3>IA pour la Recherche Scientifique</h3>
              <p>Implémentation de systèmes multi-agents pour l'analyse scientifique et la rédaction, optimisant vos processus de recherche et communication.</p>
            </div>
            <div className="service-card">
              <h3>Communication Scientifique</h3>
              <p>Rédaction et validation de publications, articles scientifiques et supports marketing conformes aux exigences réglementaires internationales.</p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link href="/services" className="button">Découvrir tous mes services</Link>
          </div>
        </div>
      </section>
      
      <div className="divider"></div>
      
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Parcours d'Excellence</h2>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <p>Du laboratoire à la stratégie internationale, mon parcours unique combine rigueur scientifique et vision stratégique.</p>
              <ul>
                <li><strong>Doctorat en Biologie Moléculaire</strong> - Université Claude Bernard Lyon 1</li>
                <li><strong>5 ans d'expérience chez Boiron Groupe</strong> en affaires scientifiques et médicales</li>
                <li><strong>Déploiement de stratégies dans 10 pays</strong> avec coordination d'équipes internationales</li>
                <li><strong>Développement de systèmes IA</strong> pour l'analyse et la rédaction scientifique</li>
              </ul>
              <Link href="/about" className="button">En savoir plus sur mon parcours</Link>
            </div>
            <div className="about-image">
              {/* Placeholder for profile image */}
              <div style={{ backgroundColor: 'var(--light-blue)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-violet)', fontWeight: 'bold' }}>
                Photo d'Aurore Inchauspé
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Témoignages</h2>
          </div>
          <div className="testimonial-container">
            <div className="testimonial">
              <p className="testimonial-text">"Aurore a transformé notre approche de la communication scientifique. Sa capacité à traduire des données complexes en messages stratégiques a considérablement renforcé notre positionnement auprès des professionnels de santé."</p>
              <p className="testimonial-author">— Directeur Marketing, Entreprise Pharmaceutique</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">"L'expertise d'Aurore dans la gestion de réseaux KOL internationaux nous a permis d'établir des collaborations scientifiques précieuses dans plusieurs pays européens. Son approche rigoureuse et stratégique a été déterminante."</p>
              <p className="testimonial-author">— Responsable Affaires Médicales, Laboratoire International</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Projets Récents</h2>
          </div>
          <div className="projects">
            <div className="project-card">
              <div className="project-image" style={{ backgroundColor: 'var(--light-violet)' }}></div>
              <div className="project-content">
                <h3>Système Multi-agents pour la Recherche Scientifique</h3>
                <p>Développement d'un système IA capable de rédiger des documents scientifiques et d'effectuer une lecture critique d'articles, optimisant les processus de recherche.</p>
                <Link href="/case-studies#ai-research">En savoir plus →</Link>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{ backgroundColor: 'var(--light-blue)' }}></div>
              <div className="project-content">
                <h3>Stratégie Médico-Scientifique Multi-Pays</h3>
                <p>Élaboration et déploiement d'une stratégie cohérente adaptée aux spécificités de 10 marchés internationaux, incluant formation des équipes locales et développement d'outils de communication.</p>
                <Link href="/case-studies#international-strategy">En savoir plus →</Link>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link href="/case-studies" className="button">Voir tous les projets</Link>
          </div>
        </div>
      </section>
      
      <div className="divider"></div>
      
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Prêt à transformer vos défis scientifiques en opportunités?</h2>
          </div>
          <p className="text-center">Que vous cherchiez à développer une stratégie scientifique internationale, à améliorer votre communication médicale ou à former vos équipes, mon expertise unique est à votre service.</p>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link href="/contact" className="button">Prendre rendez-vous</Link>
          </div>
        </div>
      </section>
      
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Dernières Publications</h2>
          </div>
          <div className="blog-posts">
            <div className="blog-card">
              <div className="blog-image" style={{ backgroundColor: 'var(--light-green)' }}></div>
              <div className="blog-content">
                <div className="blog-meta">12 Octobre 2023</div>
                <h3>L'IA au service de la recherche scientifique: opportunités et défis</h3>
                <p>Comment l'intelligence artificielle transforme les processus de recherche et ouvre de nouvelles perspectives pour les scientifiques.</p>
                <Link href="/blog/ia-recherche-scientifique">Lire l'article →</Link>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image" style={{ backgroundColor: 'var(--light-violet)' }}></div>
              <div className="blog-content">
                <div className="blog-meta">28 Septembre 2023</div>
                <h3>Communication scientifique efficace: traduire la complexité en clarté</h3>
                <p>Stratégies et techniques pour communiquer efficacement des concepts scientifiques complexes à différentes audiences.</p>
                <Link href="/blog/communication-scientifique-efficace">Lire l'article →</Link>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image" style={{ backgroundColor: 'var(--light-blue)' }}></div>
              <div className="blog-content">
                <div className="blog-meta">15 Septembre 2023</div>
                <h3>Gestion de réseaux KOL internationaux: bonnes pratiques</h3>
                <p>Comment développer et maintenir des relations fructueuses avec des leaders d'opinion à l'échelle internationale.</p>
                <Link href="/blog/gestion-kol-internationaux">Lire l'article →</Link>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link href="/blog" className="button">Voir toutes les publications</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

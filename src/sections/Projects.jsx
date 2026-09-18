import SectionHeader from '../components/SectionHeader';
import { PROJECTS } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import styles from './Projects.module.css';

function ProjCard({ proj }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`${styles.card} ${proj.upcoming ? styles.upcoming : ''}`}>
      {proj.upcoming && <div className={styles.upcomingBadge}>🚀 Upcoming</div>}
      <div className={styles.emoji}>{proj.emoji}</div>
      <div className={styles.title}>{proj.title}</div>
      <p className={styles.desc}>{proj.desc}</p>
      <div className={styles.tags}>
        {proj.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      {proj.url ? (
        <a href={proj.url} target="_blank" rel="noopener" className={styles.link}>{proj.urlLabel}</a>
      ) : (
        <span className={styles.soon}>{proj.urlLabel}</span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader eyebrow="What I've Built" title="Featured" titleEm="Projects" />
        <div className={styles.grid}>
          {PROJECTS.map(p => <ProjCard key={p.title} proj={p} />)}
        </div>
      </div>
    </section>
  );
}

import SectionHeader from '../components/SectionHeader';
import { EXPERIENCES } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import styles from './Experience.module.css';

function ExpCard({ exp }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.expIndex}>{exp.index}</div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.company}>{exp.company}</div>
            <span className={styles.badge}>{exp.badge}</span>
          </div>
          <div className={styles.role}>{exp.role}</div>
          <ul className={styles.points}>
            {exp.points.map((p, i) => (
              <li key={i} className={styles.point}>{p}</li>
            ))}
          </ul>
          <div className={styles.pills}>
            {exp.stack.map(s => (
              <span key={s} className={styles.pill}>{s}</span>
            ))}
          </div>
          <a href={exp.url} target="_blank" rel="noopener" className={styles.url}>
            {exp.urlLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader eyebrow="Career" title="Work" titleEm="Experience" />
        <div className={styles.stack}>
          {EXPERIENCES.map(exp => (
            <ExpCard key={exp.index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

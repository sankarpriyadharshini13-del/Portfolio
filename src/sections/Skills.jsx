import SectionHeader from '../components/SectionHeader';
import { SKILLS } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import styles from './Skills.module.css';

function SkillGroup({ sg }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={styles.sg}>
      <div className={styles.sgHead}>
        <span className={styles.sgIcon}>{sg.icon}</span>
        <span className={styles.sgName}>{sg.name}</span>
      </div>
      <div className={styles.sgTags}>
        {sg.tags.map(t => <span key={t} className={styles.sgTag}>{t}</span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  const introRef = useReveal();

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader eyebrow="Tech Stack" title="Skills &" titleEm="Tools" />
        <div className={styles.layout}>
          <div ref={introRef} className={styles.intro}>
            <p>I work across the <strong>full stack</strong> — from crafting polished UIs in React and Flutter to building robust APIs in Node.js and managing databases in MongoDB, Supabase &amp; Firebase.</p>
            <p>Always learning, always shipping. Here's what's currently in my toolkit.</p>
          </div>
          <div className={styles.grid}>
            {SKILLS.map(sg => <SkillGroup key={sg.name} sg={sg} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

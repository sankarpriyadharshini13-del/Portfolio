import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/useReveal';
import styles from './About.module.css';

export default function About() {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <section id="about" className={`${styles.section} bg-cream2`}>
      <div className={styles.inner}>
        <SectionHeader eyebrow="Who I Am" title="About" titleEm="Me" />
        <div className={styles.grid}>
          <div ref={r1} className={styles.left}>
            <p>I'm an <strong>energetic and results-driven Junior Software Engineer</strong> based in Chennai, India, with hands-on experience building full-stack web and mobile applications.</p>
            <p>Passionate about <strong>delivering high-quality outcomes</strong> and exceeding expectations. A quick learner with a collaborative mindset — I thrive in teams, tackle challenges head-on, and contribute meaningfully to innovation.</p>
            <p>From <span className={styles.tealText}>360° virtual tours</span> to <span className={styles.tealText}>no-code app builders</span>, I love building products that create real impact for real users.</p>
            <p>I'm currently <strong>open to new opportunities</strong> — whether full-time roles, freelance work, or exciting collaborations.</p>
            <div className={styles.ctas}>
              <a href="mailto:sankarpriyadharshini13@gmail.com" className={styles.btnSolid}>Hire Me →</a>
              <a href="#projects" className={styles.btnOutline}>See Projects</a>
            </div>
          </div>
          <div ref={r2} className={styles.right}>
            <div className={styles.box}>
              <div className={styles.boxTitle}>Contact Info</div>
              {[
                { icon: '✉️', label: 'Email', value: 'sankarpriyadharshini13@gmail.com' },
                { icon: '📞', label: 'Phone', value: '+91 93612 66129' },
                { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu, India' },
              ].map(r => (
                <div key={r.label} className={styles.infoRow}>
                  <div className={styles.infoIcon}>{r.icon}</div>
                  <div>
                    <span className={styles.infoLabel}>{r.label}</span>
                    <span className={styles.infoValue}>{r.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.box}>
              <div className={styles.boxTitle}>Connect</div>
              <a href="mailto:sankarpriyadharshini13@gmail.com" className={styles.connectLink}>
                <span>✉️</span> sankarpriyadharshini13@gmail.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className={styles.connectLink}>
                <span>🔗</span> LinkedIn Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

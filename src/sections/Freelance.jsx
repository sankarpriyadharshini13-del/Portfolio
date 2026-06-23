import SectionHeader from '../components/SectionHeader';
import { FREELANCE_SERVICES } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import styles from './Freelance.module.css';

function ServiceCard({ svc }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.icon}>{svc.icon}</div>
      <h3 className={styles.title}>{svc.title}</h3>
      <p className={styles.desc}>{svc.desc}</p>
    </div>
  );
}

export default function Freelance() {
  const introRef = useReveal();
  const ctaRef = useReveal();

  return (
    <section id="freelance" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader eyebrow="Freelance Work" title="Let Me Build" titleEm="It For You" />
        <div ref={introRef} className={styles.intro}>
          <p>
            Got an idea but no team? I'm your <strong>all-in-one developer</strong>. I take projects from concept to live product — design, code, deploy. You focus on your business; I handle every line of code.
          </p>
          <p>
            Whether it's a <strong>landing page, full-stack web app, or cross-platform mobile app</strong>, I deliver clean, scalable, production-ready work — on time, every time.
          </p>
        </div>

        <div className={styles.grid}>
          {FREELANCE_SERVICES.map(svc => (
            <ServiceCard key={svc.title} svc={svc} />
          ))}
        </div>

        <div ref={ctaRef} className={styles.cta}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaLeft}>
              <h3 className={styles.ctaTitle}>Ready to start your project?</h3>
              <p className={styles.ctaDesc}>I'm available for freelance projects right now. Drop me a message and I'll respond within 24 hours with a plan and estimate.</p>
              <div className={styles.ctaMeta}>
                <span className={styles.ctaBadge}>✅ Available Now</span>
                <span className={styles.ctaBadge}>⚡ Fast Delivery</span>
                <span className={styles.ctaBadge}>🔄 Revisions Included</span>
              </div>
            </div>
            <div className={styles.ctaRight}>
              <a href="#contact" className={styles.ctaBtn}>Start a Project →</a>
              <a href="mailto:sankarpriyadharshini13@gmail.com" className={styles.ctaBtnOutline}>Email Me Directly</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

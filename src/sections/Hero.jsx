import { useState, useEffect, useRef } from 'react';
import { ROLES, STATS } from '../data/portfolio';
import styles from './Hero.module.css';

function useCounter(target, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let step = 0;
    const steps = 40;
    const timer = setInterval(() => {
      step++;
      const p = 1 - Math.pow(1 - step / steps, 3);
      setVal(Math.round(p * target));
      if (step >= steps) { setVal(target); clearInterval(timer); }
    }, 1200 / steps);
    return () => clearInterval(timer);
  }, [active, target]);
  return val;
}

function StatItem({ num, suffix, label }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const val = useCounter(num, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); obs.unobserve(el); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.stat} ref={ref}>
      <div className={styles.statNum}>{val}{suffix}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [ri, setRi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = ROLES[ri];
    const timeout = setTimeout(() => {
      if (!del) {
        const next = ci + 1;
        setTyped(cur.slice(0, next));
        setCi(next);
        if (next === cur.length) setDel(true);
      } else {
        const next = ci - 1;
        setTyped(cur.slice(0, next));
        setCi(next);
        if (next === 0) {
          setDel(false);
          setRi(r => (r + 1) % ROLES.length);
        }
      }
    }, del ? 55 : ci === ROLES[ri].length ? 2200 : 95);
    return () => clearTimeout(timeout);
  }, [typed, ri, ci, del]);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBgText} aria-hidden="true">PS</div>
      <div className={styles.heroRow}>
        {/* LEFT */}
        <div className={styles.heroLeft}>
          <div className={styles.chip}>
            <span className={styles.blinkDot} />
            Available for Opportunities
          </div>
          <h1 className={styles.heroName}>
            Priyadharshini<em className={styles.nameEm}>Sankar</em>
          </h1>
          <p className={styles.heroRole}>
            <strong>{typed}<span className={styles.cursor}>|</span></strong>
            {' '}— crafting full-stack products with React, Node.js, Flutter &amp; more.
            Currently at <strong>JBBSoftech, Chennai.</strong>
          </p>
          <div className={styles.heroBtns}>
            <a href="#contact" className={styles.btnSolid}>Get in Touch ↗</a>
            <a href="#projects" className={styles.btnOutline}>View Projects</a>
          </div>
          <div className={styles.heroSoc}>
            <a href="mailto:sankarpriyadharshini13@gmail.com" className={styles.socBtn} title="Email">✉</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className={styles.socBtn} title="LinkedIn">in</a>
            <a href="tel:+919361266129" className={styles.socBtn} title="Phone">☎</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.heroRight}>
          <div className={styles.heroCard}>
            <div className={styles.cardLabel}>Current Role</div>
            <div className={styles.cardTitle}>Junior Software Engineer</div>
            <div className={styles.cardSub}>JBBSoftech Private Limited · Chennai, India</div>
            <span className={styles.cardTag}>Oct 2025 – Present</span>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.cardLabel}>Latest Project</div>
            <div className={styles.cardTitle}>Appifyours — No-Code App Builder</div>
            <div className={styles.cardSub}>Create mobile apps without writing a single line of code</div>
            <span className={styles.cardTag}>Flutter · Node.js · MongoDB</span>
          </div>
          <div className={styles.statsRow}>
            {STATS.map(s => (
              <StatItem key={s.label} num={s.num} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

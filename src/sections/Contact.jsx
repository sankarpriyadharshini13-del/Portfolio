import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useReveal } from '../hooks/useReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const r1 = useReveal();
  const r2 = useReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [note, setNote] = useState({ text: '', ok: false });
  const [busy, setBusy] = useState(false);

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = () => {
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setNote({ text: '⚠ Please fill in all required fields.', ok: false });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNote({ text: '⚠ Please enter a valid email address.', ok: false });
      return;
    }
    setBusy(true);
    const sub = encodeURIComponent(form.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:sankarpriyadharshini13@gmail.com?subject=${sub}&body=${body}`;
    setNote({ text: '✅ Opening your email client…', ok: true });
    setForm({ name: '', email: '', subject: '', message: '' });
    setBusy(false);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader eyebrow="Hire Me" title="Got an Idea?" titleEm="I'll Build It." />
        <div className={styles.grid}>
          {/* LEFT */}
          <div ref={r1} className={styles.left}>
            <h3 className={styles.contactHeading}>Your Vision → My Code → Live Product 🚀</h3>
            <p className={styles.contactDesc}>
              Tell me what you need — I'll take it from idea to a fully working product. Whether it's a <strong>website, mobile app, or full-stack platform</strong>, I handle the entire build so you don't have to worry about a single line of code.
            </p>
            <p className={styles.contactDesc}>
              Just drop me a message and I'll get back to you <strong>within 24 hours.</strong>
            </p>
            <div className={styles.cItems}>
              {[
                { icon: '✉️', label: 'Email', value: 'sankarpriyadharshini13@gmail.com', href: 'mailto:sankarpriyadharshini13@gmail.com' },
                { icon: '📞', label: 'Phone', value: '+91 93612 66129', href: 'tel:+919361266129' },
                { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu, India', href: null },
                { icon: '🔗', label: 'LinkedIn', value: 'Connect on LinkedIn →', href: 'https://linkedin.com' },
              ].map(item => (
                <div key={item.label} className={styles.cItem}>
                  <div className={styles.cIc}>{item.icon}</div>
                  <div>
                    <span className={styles.cLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className={styles.cValue}>{item.value}</a>
                    ) : (
                      <span className={styles.cValue}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div ref={r2} className={styles.right}>
            <div className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">Your Name *</label>
                  <input id="name" name="name" type="text" className={styles.input} placeholder="John Doe" value={form.name} onChange={update} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" className={styles.input} placeholder="john@example.com" value={form.email} onChange={update} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" className={styles.input} placeholder="e.g. Build me an e-commerce website..." value={form.subject} onChange={update} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Message *</label>
                <textarea id="message" name="message" className={styles.input} rows={5} placeholder="Describe your project — what you need, when you need it, and any details that help me give you a quote..." value={form.message} onChange={update} />
              </div>
              <button className={styles.submitBtn} onClick={submit} disabled={busy}>
                {busy ? 'Sending…' : 'Send Message →'}
              </button>
              {note.text && (
                <p className={styles.fnote} style={{ color: note.ok ? 'var(--teal)' : '#d4634a' }}>
                  {note.text}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

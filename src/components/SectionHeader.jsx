import styles from './SectionHeader.module.css';

export default function SectionHeader({ eyebrow, title, titleEm }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>
        {title} <em>{titleEm}</em>
      </h2>
      <div className={styles.rule} />
    </div>
  );
}

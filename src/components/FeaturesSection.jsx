import styles from './FeaturesSection.module.css';

const features = [
  {
    icon: '🔍',
    title: 'AI Visibility Tracking',
    desc: 'See exactly how ChatGPT, Perplexity, Google, and Reddit describe your brand in real-time.',
  },
  {
    icon: '📈',
    title: 'SEO Intelligence',
    desc: 'Discover keyword gaps, competitors ranking over you, and actionable fixes to climb results.',
  },
  {
    icon: '🎯',
    title: 'Lead Generation',
    desc: 'Convert your AI visibility into qualified leads with smart capture and routing tools.',
  },
  {
    icon: '⚡',
    title: 'Instant Scan',
    desc: 'No signup needed. Paste your URL and get a full brand visibility report in under 10 seconds.',
  },
  {
    icon: '📊',
    title: 'Platform Breakdown',
    desc: 'Understand per-platform performance across all major AI answer engines and search platforms.',
  },
  {
    icon: '🛡',
    title: 'Brand Protection',
    desc: 'Get alerted when AI models misrepresent or omit your brand — and fix it before it spreads.',
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

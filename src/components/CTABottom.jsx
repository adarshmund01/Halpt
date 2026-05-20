import s from './CTABottom.module.css';

const miniFeatures = [
  { num: '01', label: 'AI Visibility Scanner' },
  { num: '02', label: 'Growth Simulator' },
  { num: '03', label: 'Opportunity Finder' },
  { num: '04', label: 'AI Consultant Chat' },
  { num: '05', label: 'Startup Stack Builder' },
];

export default function CTABottom() {
  return (
    <section className={s.section}>
      <div className="section-wrap">
        <div className={s.card}>
          <h2 className={s.heading}>All-In-One Platform to<br/>Grow Your Business with AI</h2>
          <div className={s.features}>
            {miniFeatures.map(f => (
              <div key={f.num} className={s.feat}>
                <span className={s.featNum}>{f.num}</span>
                <span className={s.featLabel}>{f.label}</span>
              </div>
            ))}
          </div>
          <p className={s.sub}>Ready to take your brand to the next level?</p>
          <div className={s.scanRow}>
            <input type="text" placeholder="Paste your website URL..." className={s.input} />
            <button className={s.btn}>Scan Now →</button>
          </div>
          <div className={s.trust}>
            Works with any public site · Results in seconds · 80% free insights
          </div>
        </div>
      </div>
    </section>
  );
}

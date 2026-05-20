import { useState } from 'react';
import s from './GrowthSimulator.module.css';

const industries = ['Salon', 'Restaurant', 'Retail', 'SaaS', 'Consulting', 'E-Commerce'];
const locations = ['Delhi, India', 'Mumbai, India', 'Bangalore, India', 'Chennai, India'];
const revenues = ['< ₹1 Lakh', '₹1–3 Lakh', '₹3–5 Lakh', '₹5–10 Lakh', '₹10L+'];

function GrowthChart({ score }) {
  const W = 260, H = 100;
  const pts = [10, 18, 15, 28, 35, 45, 42, 58, 62, 72, 68, 80].map(p => p * (score / 86));
  const max = Math.max(...pts), min = 8;
  const xs = pts.map((_, i) => 16 + (i / (pts.length - 1)) * (W - 32));
  const ys = pts.map(p => H - 8 - ((p - min) / (max - min)) * (H - 20));
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${ys[i]}`).join(' ');
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} className={s.chart}>
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C518" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={d + ` L${xs[xs.length - 1]},${H} L${xs[0]},${H} Z`} fill="url(#cg)" />
      <path d={d} stroke="#F5C518" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GrowthSimulator({ onBack }) {
  const [industry, setIndustry] = useState('Salon');
  const [location, setLocation] = useState('Delhi, India');
  const [revenue, setRevenue] = useState('₹3–5 Lakh');
  const [website, setWebsite] = useState('');
  const [simulated, setSimulated] = useState(false);

  const score = 86;

  return (
    <div className={s.page}>
      <div className="section-wrap">
        <button className={s.back} onClick={onBack}>← Back</button>
        <div className={s.pageHeader}>
          <span className={s.num}>02</span>
          <h1 className={s.title}>AI Business Growth Simulator</h1>
          <p className={s.sub}>Simulate your growth potential with the power of AI.</p>
        </div>

        <div className={s.grid}>
          {/* Form */}
          <div className={s.formCard}>
            <div className={s.cardTitle}>Tell us about your business</div>
            <div className={s.field}>
              <label className={s.label}>Business Type</label>
              <select className={s.select} value={industry} onChange={e => setIndustry(e.target.value)}>
                {industries.map(i => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div className={s.field}>
              <label className={s.label}>Business Location</label>
              <select className={s.select} value={location} onChange={e => setLocation(e.target.value)}>
                {locations.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div className={s.field}>
              <label className={s.label}>Monthly Revenue</label>
              <select className={s.select} value={revenue} onChange={e => setRevenue(e.target.value)}>
                {revenues.map(r => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div className={s.field}>
              <label className={s.label}>Current Website (Optional)</label>
              <input className={s.input} placeholder="yourwebsite.com" value={website} onChange={e => setWebsite(e.target.value)} />
            </div>
            <button className={s.simBtn} onClick={() => setSimulated(true)}>Simulate Growth →</button>
          </div>

          {/* Score gauge */}
          <div className={s.gaugeCard}>
            <div className={s.cardTitle}>Your Growth Potential</div>
            <div className={s.gauge}>
              <svg viewBox="0 0 120 120" className={s.gaugeSvg}>
                <circle cx="60" cy="60" r="50" fill="none" stroke="#1e1e1e" strokeWidth="10" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="url(#gg)" strokeWidth="10"
                  strokeDasharray={`${(score / 100) * 314} 314`} strokeLinecap="round"
                  transform="rotate(-90 60 60)" />
                <defs>
                  <linearGradient id="gg" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F5C518" />
                    <stop offset="100%" stopColor="#e89c00" />
                  </linearGradient>
                </defs>
              </svg>
              <div className={s.gaugeInner}>
                <div className={s.gaugeScore}>{score}</div>
                <div className={s.gaugeLabel}>/100</div>
              </div>
            </div>
            <div className={s.potential}>High Growth Potential</div>
            <p className={s.potentialSub}>Your business has great potential with the right AI strategies.</p>
          </div>

          {/* Projections */}
          <div className={s.projCard}>
            <div className={s.cardTitle}>Growth Projections</div>
            <GrowthChart score={score} />
            <div className={s.stats}>
              <div className={s.stat}><div className={s.statVal}>+215%</div><div className={s.statLabel}>Revenue Increase</div></div>
              <div className={s.stat}><div className={s.statVal}>+178%</div><div className={s.statLabel}>Customers</div></div>
              <div className={s.stat}><div className={s.statVal}>+320hrs</div><div className={s.statLabel}>Time Saved</div></div>
            </div>
          </div>
        </div>

        {/* Opportunities */}
        <div className={s.oppsCard}>
          <div className={s.cardTitle}>Top Growth Opportunities</div>
          <ul className={s.oppList}>
            <li>→ Improve local SEO to attract nearby customers</li>
            <li>→ Use online booking & reminders to reduce no-shows</li>
            <li>→ Run targeted Instagram & Google Ads</li>
            <li>→ Create loyalty program to increase repeat visits</li>
          </ul>
        </div>

        <div className={s.insight}>
          <span className={s.insightIcon}>✦</span>
          <span className={s.insightKey}>Key Insight</span>
          You are doing great! Focus on automation and local SEO to 2x your growth.
        </div>
      </div>
    </div>
  );
}

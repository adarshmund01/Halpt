import { useState } from 'react';
import s from './StartupStack.module.css';

const stages = ['Early Stage (Idea/MVP)', 'Growth Stage', 'Scale Stage'];
const industries = ['Salon / Beauty', 'SaaS', 'E-Commerce', 'Food & Beverage', 'Consulting'];
const sizes = ['1 - 5', '6 - 20', '21 - 50', '50+'];
const budgets = ['< ₹10K', '₹10K – ₹30K', '₹30K – ₹1L', '₹1L+'];

const stackData = [
  {
    category: 'Website',
    tool1: { name: 'Webflow', cost: '₹15K/mo', tag: 'Best for your website', color: '#4353ff' },
    tool2: { name: 'Vercel', cost: '₹5K/mo', tag: 'Fast hosting', color: '#000' },
  },
  {
    category: 'Database',
    tool1: { name: 'Supabase', cost: '₹2K/mo', tag: 'Backend & database', color: '#3ecf8e' },
    tool2: { name: 'HubSpot CRM', cost: '₹6.5K/mo', tag: 'CRM', color: '#ff7a59' },
  },
  {
    category: 'Payments',
    tool1: { name: 'Razorpay', cost: '₹1K/mo', tag: 'Accept payments online', color: '#2d9cd8' },
    tool2: { name: 'Make (Integromat)', cost: '₹2K/mo', tag: 'Automate workflows', color: '#6e4ff6' },
  },
];

export default function StartupStack({ onBack }) {
  const [stage, setStage] = useState(stages[0]);
  const [industry, setIndustry] = useState(industries[0]);
  const [size, setSize] = useState(sizes[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [built, setBuilt] = useState(true);

  const totalCost = '₹24.5K';

  return (
    <div className={s.page}>
      <div className="section-wrap">
        <button className={s.back} onClick={onBack}>← Back</button>
        <div className={s.pageHeader}>
          <span className={s.num}>05</span>
          <h1 className={s.title}>Build My Startup Stack</h1>
          <p className={s.sub}>Get the perfect tools stack for your startup.</p>
        </div>

        <div className={s.grid}>
          {/* Form */}
          <div className={s.formCard}>
            <div className={s.cardTitle}>About Your Startup</div>
            <div className={s.field}>
              <label className={s.label}>Startup Stage</label>
              <select className={s.select} value={stage} onChange={e => setStage(e.target.value)}>
                {stages.map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div className={s.field}>
              <label className={s.label}>Industry</label>
              <select className={s.select} value={industry} onChange={e => setIndustry(e.target.value)}>
                {industries.map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div className={s.field}>
              <label className={s.label}>Team Size</label>
              <select className={s.select} value={size} onChange={e => setSize(e.target.value)}>
                {sizes.map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div className={s.field}>
              <label className={s.label}>Monthly Budget</label>
              <select className={s.select} value={budget} onChange={e => setBudget(e.target.value)}>
                {budgets.map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
            <button className={s.buildBtn} onClick={() => setBuilt(true)}>Build My Stack →</button>
          </div>

          {/* Stack results */}
          <div className={s.stackPanel}>
            <div className={s.cardTitle}>Your Recommended Stack</div>
            {built && (
              <div className={s.stackList}>
                {stackData.map(row => (
                  <div key={row.category} className={s.stackRow}>
                    <div className={s.stackTool} style={{ borderLeft: `3px solid ${row.tool1.color}` }}>
                      <div className={s.toolName}>{row.tool1.name}</div>
                      <div className={s.toolTag}>{row.tool1.tag}</div>
                      <div className={s.toolCost}>{row.tool1.cost}</div>
                    </div>
                    <div className={s.stackTool} style={{ borderLeft: `3px solid ${row.tool2.color}` }}>
                      <div className={s.toolName}>{row.tool2.name}</div>
                      <div className={s.toolTag}>{row.tool2.tag}</div>
                      <div className={s.toolCost}>{row.tool2.cost}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className={s.stackFooter}>
              <div className={s.totalRow}>
                <div>
                  <div className={s.totalLabel}>Total Estimated Cost</div>
                  <div className={s.totalVal}>{totalCost}/month</div>
                </div>
                <div>
                  <div className={s.totalLabel}>Total Tools</div>
                  <div className={s.totalVal}>6</div>
                </div>
              </div>
              <button className={s.getBtn}>Get My Stack Now →</button>
            </div>
          </div>
        </div>

        {/* Benefits row */}
        <div className={s.benefits}>
          {[
            { icon: '⏱', val: 'Save 30+ Hours', sub: 'with automation' },
            { icon: '🛡', val: 'Tools trusted by', sub: '1000+ startups' },
            { icon: '⚙', val: 'Optimised for', sub: 'your budget' },
            { icon: '⚡', val: 'Easy setup', sub: 'in minutes' },
          ].map(b => (
            <div key={b.val} className={s.benefit}>
              <span className={s.bIcon}>{b.icon}</span>
              <div>
                <div className={s.bVal}>{b.val}</div>
                <div className={s.bSub}>{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import s from './ConsultantChat.module.css';

const roles = ['Startup Advisor', 'UI Expert', 'SEO Consultant', 'Automation Architect'];

const mockResponses = {
  default: {
    business: 'Salon Business in Delhi',
    target: 'Local customers, premium experience, high retention',
    sections: [
      {
        title: '1. Website Plan (UI + UX)',
        icon: '🌐',
        items: ['Modern, mobile-first website', 'Online booking system', 'Service showcase with pricing', 'Customer reviews + before/after gallery', 'WhatsApp chat integration'],
      },
      {
        title: '2. Automation Ideas',
        icon: '⚡',
        items: ['Auto appointment booking + reminders', 'WhatsApp/SMS notifications', 'Customer follow-up automation', 'Loyalty program automation', 'Feedback collection after service'],
      },
      {
        title: '3. Marketing Strategy',
        icon: '🎯',
        items: ['Local SEO (Google Business Profile)', 'Instagram Reels & Before/After Content', 'Run location-based ads in Delhi', 'Offer referral discounts', 'Collaborate with local influencers'],
      },
      {
        title: '4. Pricing Suggestions',
        icon: '₹',
        items: ['Haircut: ₹499 – ₹799', 'Hair Color: ₹1200 – ₹2999', 'Premium Package: ₹4000+', 'Offer Membership Plans for Regulars'],
      },
    ],
  },
};

export default function ConsultantChat({ onBack }) {
  const [query, setQuery] = useState('I run a salon in Delhi');
  const [activeRole, setActiveRole] = useState('Startup Advisor');
  const [submitted, setSubmitted] = useState(true);

  const response = mockResponses.default;

  return (
    <div className={s.page}>
      <div className="section-wrap">
        <button className={s.back} onClick={onBack}>← Back</button>
        <div className={s.pageHeader}>
          <span className={s.num}>04</span>
          <h1 className={s.title}>Live AI Consultant Chat</h1>
          <p className={s.sub}>Get expert advice from AI consultants trained in multiple domains.</p>
        </div>

        <div className={s.grid}>
          {/* Left – query panel */}
          <div className={s.queryPanel}>
            <div className={s.panelTitle}>Your Business Query</div>
            <div className={s.queryBox}>
              <textarea
                className={s.textarea}
                value={query}
                onChange={e => setQuery(e.target.value)}
                rows={3}
              />
              <button className={s.sendBtn} onClick={() => setSubmitted(true)}>→</button>
            </div>

            <div className={s.roles}>
              {roles.map(r => (
                <button
                  key={r}
                  className={`${s.roleBtn} ${activeRole === r ? s.roleActive : ''}`}
                  onClick={() => setActiveRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Right – response */}
          <div className={s.responsePanel}>
            <div className={s.panelTitle}>AI Consultant Response</div>
            {submitted && (
              <div className={s.response}>
                <div className={s.respHeader}>
                  <div className={s.respTitle}>Business Overview</div>
                  <div className={s.respBusiness}>{response.business}</div>
                  <div className={s.respTarget}>Target: {response.target}</div>
                </div>
                {response.sections.map(sec => (
                  <div key={sec.title} className={s.section}>
                    <div className={s.secTitle}>
                      <span className={s.secIcon}>{sec.icon}</span>
                      {sec.title}
                    </div>
                    <ul className={s.secList}>
                      {sec.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
                <button className={s.detailBtn}>Get Detailed Plan →</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

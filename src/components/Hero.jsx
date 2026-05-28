import { useState } from 'react';
import s from './Hero.module.css';

export default function Hero({ onNav }) {
  const [url, setUrl] = useState('');
  return (
    <section className={s.hero}>
      <div className="section-wrap">
        <div className={s.center}>
          <div className={s.badge}>✦ AI Visibility, Market Intelligence & Brand Insights — From A Single Scan.</div>
          <h1 className={s.headline}>
            Know What The Internet Thinks.<br/>
            <span className={s.accent}>About</span> Your Brand!!
          </h1>
          <p className={s.sub}>
            Analyze AI visibility, competitor traffic, customer discussions, SEO performance, and brand sentiment in one dashboard.
          </p>
          <div className={s.scanBar}>
            <input
              type="text"
              placeholder="Paste your website URL..."
              value={url}
              onChange={e => setUrl(e.target.value)}
              className={s.input}
            />
           <button className={s.scanBtn} onClick={() => url.trim() && onNav('results', url.trim())}>
                Scan Now →
           </button>
          </div>
          <div className={s.trustRow}>
            <span>🛡</span>
            <span>No signup required</span>
            <span className={s.dot}>•</span>
            <span>Instant results</span>
            <span className={s.dot}>•</span>
            <span>80% free insights</span>
          </div>
        </div>
      </div>
    </section>
  );
}
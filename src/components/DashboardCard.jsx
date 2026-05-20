import { useEffect, useRef } from 'react';
import styles from './DashboardCard.module.css';

const platforms = [
  { name: 'ChatGPT', score: 87, color: '#19c37d', icon: '⬡' },
  { name: 'Reddit',  score: 91, color: '#ff4500', icon: '●' },
  { name: 'Google',  score: 77, color: '#4285f4', icon: '◈' },
  { name: 'Perplexity', score: 73, color: '#a78bfa', icon: '✦' },
  { name: 'Claude',  score: 69, color: '#d97706', icon: '◆' },
  { name: 'Gemini',  score: 66, color: '#60a5fa', icon: '✧' },
];

const keywords = ['AI tools', 'productivity', 'automation', 'startup', 'saas'];

// Tiny sparkline generator
function Sparkline() {
  const points = [30, 40, 35, 55, 45, 60, 50, 65, 58, 70, 62, 75];
  const w = 420, h = 80;
  const max = Math.max(...points), min = Math.min(...points);
  const xs = points.map((_, i) => (i / (points.length - 1)) * w);
  const ys = points.map(p => h - ((p - min) / (max - min)) * (h - 10) - 5);
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${ys[i]}`).join(' ');

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} className={styles.sparkline}>
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C518" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={d + ` L${xs[xs.length-1]},${h} L0,${h} Z`} fill="url(#spark)" />
      <path d={d} stroke="#F5C518" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {xs.map((x, i) => (
        <circle key={i} cx={x} cy={ys[i]} r="3" fill="#F5C518" />
      ))}
    </svg>
  );
}

export default function DashboardCard() {
  return (
    <div className={styles.card}>
      {/* Score header */}
      <div className={styles.scoreHeader}>
        <div>
          <div className={styles.scoreLabel}>AI Visibility Score</div>
          <div className={styles.scoreValue}>
            84 <span className={styles.outOf}>/100</span>
          </div>
        </div>
        <div className={styles.weekBadge}>↑ 12% this week</div>
      </div>

      <Sparkline />

      {/* Platform breakdown */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Platform Breakdown</div>
          <div className={styles.sectionSub}>See how you appear across AI platforms</div>
        </div>
        <div className={styles.platforms}>
          {platforms.map(p => (
            <div key={p.name} className={styles.platform}>
              <div className={styles.platformIcon} style={{ color: p.color }}>{p.icon}</div>
              <div className={styles.platformName}>{p.name}</div>
              <div className={styles.platformScore}>
                {p.score}<span className={styles.platformOutOf}>/100</span>
              </div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ width: `${p.score}%`, background: p.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className={styles.bottomRow}>
        <div className={styles.keywords}>
          <div className={styles.sectionTitle}>Top Mentioned Keywords</div>
          <div className={styles.tags}>
            {keywords.map(k => (
              <span key={k} className={styles.tag}>{k}</span>
            ))}
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.sectionTitle}>AI Summary</div>
          <p className={styles.summaryText}>
            Your brand is gaining traction on Reddit but has limited visibility in AI answers.
            Improve content depth and authority to rank higher.
          </p>
        </div>
      </div>
    </div>
  );
}

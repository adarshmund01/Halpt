import { useState, useEffect } from 'react';
import s from './BrandResults.module.css';

const mockData = {
  domain: 'apple.com',
  score: 84,
  aiMentions: [
    { platform: 'ChatGPT', icon: '⬡', color: '#19c37d', summary: 'Apple is frequently cited as the most innovative consumer electronics brand. AI models consistently recommend Apple products for premium users.', sentiment: 'positive' },
    { platform: 'Perplexity', icon: '✦', color: '#a78bfa', summary: 'Apple appears in 73% of tech recommendation queries. Strong brand authority across all AI answer engines.', sentiment: 'positive' },
    { platform: 'Claude', icon: '◆', color: '#d97706', summary: 'Apple is referenced as the industry benchmark for UX design and ecosystem integration.', sentiment: 'positive' },
    { platform: 'Gemini', icon: '✧', color: '#60a5fa', summary: 'Apple products are consistently mentioned when users ask about premium smartphones and laptops.', sentiment: 'neutral' },
  ],
  twitter: [
    { user: '@techreview', handle: 'Tech Review', text: 'Just tried the new product from this brand — absolutely blown away by the quality. 10/10 would recommend.', likes: '2.4K', time: '2h ago', sentiment: 'positive' },
    { user: '@startupguru', handle: 'Startup Guru', text: 'This brand keeps setting the bar higher. Competitors can\'t keep up. #Innovation', likes: '891', time: '5h ago', sentiment: 'positive' },
    { user: '@techcritic99', handle: 'Tech Critic', text: 'Overpriced as always but the experience is undeniably premium. Mixed feelings.', likes: '445', time: '8h ago', sentiment: 'neutral' },
  ],
  reddit: [
    { subreddit: 'r/technology', title: 'Why does this brand dominate every AI recommendation?', upvotes: '4.2K', comments: '312', time: '6h ago', sentiment: 'positive' },
    { subreddit: 'r/startups', title: 'How does this brand maintain such strong AI visibility?', upvotes: '1.8K', comments: '156', time: '12h ago', sentiment: 'positive' },
    { subreddit: 'r/privacy', title: 'Discussion: Is this brand trustworthy with user data?', upvotes: '923', comments: '445', time: '1d ago', sentiment: 'negative' },
  ],
  news: [
    { source: 'TechCrunch', title: 'Brand dominates AI search results across all major platforms', time: '3h ago', sentiment: 'positive' },
    { source: 'Forbes', title: 'Why AI models keep recommending this brand over competitors', time: '1d ago', sentiment: 'positive' },
    { source: 'Wired', title: 'The brand visibility war: Who wins in the AI era?', time: '2d ago', sentiment: 'neutral' },
  ],
  keywords: ['innovation', 'premium', 'trust', 'AI-visible', 'market leader'],
};

const sentimentColor = { positive: '#22c55e', neutral: '#f59e0b', negative: '#ef4444' };
const sentimentBg = { positive: 'rgba(34,197,94,0.08)', neutral: 'rgba(245,158,11,0.08)', negative: 'rgba(239,68,68,0.08)' };

function ScoreRing({ score }) {
  const r = 54, circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;
  return (
    <svg width="130" height="130" viewBox="0 0 130 130">
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <circle cx="65" cy="65" r={r} fill="none" stroke="#1e1e1e" strokeWidth="10" />
      <circle cx="65" cy="65" r={r} fill="none" stroke="url(#rg)" strokeWidth="10"
        strokeDasharray={`${fill} ${circ}`} strokeLinecap="round"
        transform="rotate(-90 65 65)" />
      <text x="65" y="60" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="800" fontFamily="Syne,sans-serif">{score}</text>
      <text x="65" y="78" textAnchor="middle" fill="#555" fontSize="12" fontFamily="DM Sans,sans-serif">/100</text>
    </svg>
  );
}

export default function BrandResults({ domain, onBack }) {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const data = { ...mockData, domain };

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  if (loading) return (
    <div className={s.loading}>
      <div className={s.spinner} />
      <div className={s.loadingText}>Scanning <span className={s.domain}>{domain}</span></div>
      <div className={s.loadingSteps}>
        <div className={s.step}>✦ Checking AI mentions...</div>
        <div className={s.step}>✦ Scanning Reddit discussions...</div>
        <div className={s.step}>✦ Fetching news coverage...</div>
        <div className={s.step}>✦ Analyzing Twitter buzz...</div>
      </div>
    </div>
  );

  return (
    <div className={s.page}>
      <div className="section-wrap">
        <button className={s.back} onClick={onBack}>← Back</button>

        {/* Header */}
        <div className={s.header}>
          <div className={s.headerLeft}>
            <div className={s.domainBadge}>🔍 {domain}</div>
            <h1 className={s.title}>Brand Visibility Report</h1>
            <p className={s.sub}>Here's what the internet and AI are saying about your brand</p>
            <div className={s.keywords}>
              {data.keywords.map(k => <span key={k} className={s.keyword}>{k}</span>)}
            </div>
          </div>
          <div className={s.scoreBox}>
            <ScoreRing score={data.score} />
            <div className={s.scoreLabel}>AI Visibility Score</div>
            <div className={s.weekUp}>↑ 12% this week</div>
          </div>
        </div>

        {/* Tabs */}
        <div className={s.tabs}>
          {['all', 'ai', 'twitter', 'reddit', 'news'].map(t => (
            <button key={t} className={`${s.tab} ${activeTab === t ? s.tabActive : ''}`}
              onClick={() => setActiveTab(t)}>
              {{ all: '⊞ All', ai: '🤖 AI Mentions', twitter: '𝕏 Twitter', reddit: '● Reddit', news: '📰 News' }[t]}
            </button>
          ))}
        </div>

        {/* AI Mentions */}
        {(activeTab === 'all' || activeTab === 'ai') && (
          <div className={s.section}>
            <div className={s.sectionHeader}>
              <h2 className={s.sectionTitle}>🤖 What AI is Saying</h2>
              <span className={s.sectionCount}>{data.aiMentions.length} platforms</span>
            </div>
            <div className={s.aiGrid}>
              {data.aiMentions.map(m => (
                <div key={m.platform} className={s.aiCard} style={{ borderTop: `3px solid ${m.color}` }}>
                  <div className={s.aiCardHeader}>
                    <span className={s.aiIcon} style={{ color: m.color }}>{m.icon}</span>
                    <span className={s.aiPlatform}>{m.platform}</span>
                    <span className={s.sentiment} style={{ color: sentimentColor[m.sentiment], background: sentimentBg[m.sentiment] }}>
                      {m.sentiment}
                    </span>
                  </div>
                  <p className={s.aiSummary}>{m.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Twitter */}
        {(activeTab === 'all' || activeTab === 'twitter') && (
          <div className={s.section}>
            <div className={s.sectionHeader}>
              <h2 className={s.sectionTitle}>𝕏 Twitter / X Buzz</h2>
              <span className={s.sectionCount}>{data.twitter.length} mentions</span>
            </div>
            <div className={s.twitterGrid}>
              {data.twitter.map((t, i) => (
                <div key={i} className={s.tweetCard}>
                  <div className={s.tweetHeader}>
                    <div className={s.tweetAvatar}>{t.handle[0]}</div>
                    <div>
                      <div className={s.tweetName}>{t.handle}</div>
                      <div className={s.tweetUser}>{t.user}</div>
                    </div>
                    <span className={s.sentiment} style={{ color: sentimentColor[t.sentiment], background: sentimentBg[t.sentiment], marginLeft: 'auto' }}>
                      {t.sentiment}
                    </span>
                  </div>
                  <p className={s.tweetText}>{t.text}</p>
                  <div className={s.tweetFooter}>
                    <span>♥ {t.likes}</span>
                    <span>{t.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reddit */}
        {(activeTab === 'all' || activeTab === 'reddit') && (
          <div className={s.section}>
            <div className={s.sectionHeader}>
              <h2 className={s.sectionTitle}>● Reddit Discussions</h2>
              <span className={s.sectionCount}>{data.reddit.length} threads</span>
            </div>
            <div className={s.redditList}>
              {data.reddit.map((r, i) => (
                <div key={i} className={s.redditCard}>
                  <div className={s.redditLeft}>
                    <div className={s.redditUpvotes}>▲ {r.upvotes}</div>
                  </div>
                  <div className={s.redditMain}>
                    <div className={s.redditSub}>{r.subreddit}</div>
                    <div className={s.redditTitle}>{r.title}</div>
                    <div className={s.redditMeta}>{r.comments} comments · {r.time}</div>
                  </div>
                  <span className={s.sentiment} style={{ color: sentimentColor[r.sentiment], background: sentimentBg[r.sentiment] }}>
                    {r.sentiment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* News */}
        {(activeTab === 'all' || activeTab === 'news') && (
          <div className={s.section}>
            <div className={s.sectionHeader}>
              <h2 className={s.sectionTitle}>📰 News Coverage</h2>
              <span className={s.sectionCount}>{data.news.length} articles</span>
            </div>
            <div className={s.newsList}>
              {data.news.map((n, i) => (
                <div key={i} className={s.newsCard}>
                  <div className={s.newsSource}>{n.source}</div>
                  <div className={s.newsTitle}>{n.title}</div>
                  <div className={s.newsMeta}>
                    <span>{n.time}</span>
                    <span className={s.sentiment} style={{ color: sentimentColor[n.sentiment], background: sentimentBg[n.sentiment] }}>
                      {n.sentiment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
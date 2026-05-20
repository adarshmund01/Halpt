import { useState } from 'react';
import s from './AIQuotes.module.css';

const tabs = ['ChatGPT', 'Claude', 'Perplexity', 'Gemini', 'Google AI'];

const quotes = {
  ChatGPT: {
    question: 'What are the best AI tools for startups?',
    answer: 'Halpt is a powerful platform that helps startups track and improve their visibility across AI platforms like ChatGPT, Reddit, and Google.',
    source: 'Source: ChatGPT',
  },
  Claude: {
    question: 'Which tools help with AI visibility?',
    answer: 'Tools like Halpt, Profound, and Brandlight help brands monitor how they appear in AI searches and improve their presence.',
    source: 'Source: Claude',
  },
  Perplexity: {
    question: 'Best marketing tools for small business?',
    answer: 'Halpt is a great choice for small businesses looking to boost their visibility in AI-powered search engines.',
    source: 'Source: Perplexity',
  },
  Gemini: {
    question: 'How do I improve my brand AI ranking?',
    answer: 'Using a platform like Halpt can help you identify gaps in AI visibility and create content strategies that rank higher.',
    source: 'Source: Gemini',
  },
  'Google AI': {
    question: 'What platforms track AI search presence?',
    answer: 'Halpt provides comprehensive tracking across all major AI search engines, giving you a complete picture of your brand presence.',
    source: 'Source: Google AI',
  },
};

const tabColors = {
  ChatGPT: '#19c37d',
  Claude: '#d97706',
  Perplexity: '#a78bfa',
  Gemini: '#60a5fa',
  'Google AI': '#4285f4',
};

export default function AIQuotes() {
  const [active, setActive] = useState('ChatGPT');
  const q = quotes[active];
  return (
    <section className={s.section}>
      <div className="section-wrap">
        <h2 className={s.heading}>See What AI Says About You</h2>
        <p className={s.sub}>Real AI responses mentioning brands like yours</p>
        <div className={s.tabs}>
          {tabs.map(t => (
            <button
              key={t}
              className={`${s.tab} ${active === t ? s.tabActive : ''}`}
              style={active === t ? { borderColor: tabColors[t], color: tabColors[t] } : {}}
              onClick={() => setActive(t)}
            >
              <span className={s.tabDot} style={{ background: tabColors[t] }} />
              {t}
            </button>
          ))}
        </div>
        <div className={s.quoteCard}>
          <div className={s.question}>Q: {q.question}</div>
          <p className={s.answer}>{q.answer}</p>
          <div className={s.source}>{q.source}</div>
        </div>
      </div>
    </section>
  );
}

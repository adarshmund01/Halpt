import s from './FeaturesStrip.module.css';

const features = [
  {
    num: '01',
    title: 'AI Visibility Scanner',
    desc: 'See how AI platforms & search engines perceive your brand and fix weak signals before competitors do.',
    highlight: 'weak signals',
    cta: 'Scan Now →',
    page: 'home',
    color: '#dbeafe', // soft blue
    highlightColor: '#93c5fd',
  },
  {
    num: '02',
    title: 'AI Business Growth Simulator',
    desc: 'Simulate your growth potential with AI and discover the exact strategies that 2x your revenue.',
    highlight: 'exact strategies',
    cta: 'Simulate Now →',
    page: 'growth',
    color: '#d1fae5', // soft green
    highlightColor: '#6ee7b7',
  },
  {
    num: '03',
    title: 'AI Opportunity Finder',
    desc: 'Find high-impact Reddit opportunities where your brand should be showing up but isn\'t.',
    highlight: 'high-impact',
    cta: 'Explore Now →',
    page: 'home',
    color: '#fef9c3', // soft yellow
    highlightColor: '#fde047',
  },
  {
    num: '04',
    title: 'Live AI Consultant Chat',
    desc: 'Get expert advice from AI consultants trained across multiple business domains instantly.',
    highlight: 'expert advice',
    cta: 'Chat Now →',
    page: 'chat',
    color: '#ede9fe', // soft purple
    highlightColor: '#c4b5fd',
  },
  {
    num: '05',
    title: 'Build My Startup Stack',
    desc: 'Get the perfect curated tools stack for your startup stage, industry and budget.',
    highlight: 'curated tools stack',
    cta: 'Build Stack →',
    page: 'stack',
    color: '#ffe4e6', // soft pink
    highlightColor: '#fda4af',
  },
];

function highlightText(desc, word, color) {
  const parts = desc.split(word);
  if (parts.length === 1) return <p>{desc}</p>;
  return (
    <p>
      {parts[0]}
      <mark style={{ background: color, color: '#000', borderRadius: '4px', padding: '1px 5px' }}>
        {word}
      </mark>
      {parts[1]}
    </p>
  );
}

export default function FeaturesStrip({ onNav }) {
  return (
    <section className={s.section}>
      <div className="section-wrap">
        <h2 className={s.heading}>Everything you need to grow in the AI era</h2>
        <div className={s.grid}>
          {features.map(f => (
            <div key={f.num} className={s.card} style={{ background: f.color }}>
              <h3 className={s.title}>{f.title}</h3>
              <div className={s.desc}>{highlightText(f.desc, f.highlight, f.highlightColor)}</div>
              <button className={s.cta} onClick={() => onNav(f.page)}>{f.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
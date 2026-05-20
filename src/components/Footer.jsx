import s from './Footer.module.css';

const cols = [
  {
    title: 'Product',
    links: ['Features', 'How it works', 'Pricing', 'Resources'],
  },
  {
    title: 'Solutions',
    links: ['For Startups', 'For Agencies', 'For Enterprise', 'For Marketers'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Security'],
  },
];

export default function Footer({ onNav }) {
  return (
    <footer className={s.footer}>
      <div className="section-wrap">
        <div className={s.grid}>
          <div className={s.brand}>
            <button className={s.logo} onClick={() => onNav('home')}>
              <div className={s.logoIcon}>H</div>
              <span className={s.logoText}>HALPT</span>
            </button>
            <p className={s.tagline}>The #1 platform to track and improve your visibility across AI platforms.</p>
            <div className={s.socials}>
              <a href="#">𝕏</a>
              <a href="#">in</a>
              <a href="#">▶</a>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title} className={s.col}>
              <div className={s.colTitle}>{col.title}</div>
              {col.links.map(l => <a key={l} href="#" className={s.link}>{l}</a>)}
            </div>
          ))}
          <div className={s.col}>
            <div className={s.colTitle}>Stay Updated</div>
            <p className={s.newsletterSub}>Get the latest AI visibility insights</p>
            <div className={s.emailRow}>
              <input type="email" placeholder="Enter your email" className={s.emailInput} />
              <button className={s.emailBtn}>→</button>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <span>© 2025 Halpt. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

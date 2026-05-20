import s from './Navbar.module.css';

export default function Navbar({ onNav, activePage }) {
  return (
    <nav className={s.nav}>
      <button className={s.logo} onClick={() => onNav('home')}>
        <div className={s.logoIcon}>H</div>
        <span className={s.logoText}>HALPT</span>
      </button>
      <ul className={s.links}>
        <li><button onClick={() => onNav('home')}>Features ▾</button></li>
        <li><button onClick={() => onNav('home')}>How it works</button></li>
        <li><button onClick={() => onNav('home')}>Pricing</button></li>
        <li><button onClick={() => onNav('home')}>Resources ▾</button></li>
      </ul>
      <div className={s.actions}>
        <button className={s.signin}>Sign In</button>
        <button className={s.getStarted} onClick={() => onNav('home')}>Get Started →</button>
      </div>
    </nav>
  );
}

import { useState } from 'react';
import s from './Banner.module.css';

export default function Banner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className={s.banner}>
      <span>🔥</span>
      <span className={s.text}>
        <strong>Launch Deal:</strong> Founder Pack <s className={s.old}>$49</s>{' '}
        <span className={s.price}>$37</span> – One-time
      </span>
      <button className={s.cta}>Claim Yours →</button>
      <button className={s.close} onClick={() => setVisible(false)}>✕</button>
    </div>
  );
}

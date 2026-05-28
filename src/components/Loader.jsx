import { useEffect, useState } from 'react';
import s from './Loader.module.css';

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState('enter'); // enter → hold → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 800);
    const t2 = setTimeout(() => setPhase('exit'), 2200);
    const t3 = setTimeout(() => onComplete(), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className={`${s.overlay} ${phase === 'exit' ? s.exit : ''}`}>
      <div className={`${s.content} ${phase !== 'enter' ? s.visible : ''}`}>
        <div className={s.brand}>
          <span className={s.letter}>H</span>
          <span className={s.letter}>A</span>
          <span className={s.letter}>L</span>
          <span className={s.letter}>P</span>
          <span className={s.letter}>T</span>
          <span className={s.dot}>.ai</span>
        </div>
        <div className={s.sub}>developed by <span className={s.dev}>Adarsh.dev</span></div>
        <div className={s.bar}><div className={s.barFill} /></div>
      </div>
    </div>
  );
}
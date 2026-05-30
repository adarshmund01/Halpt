import { useState } from 'react';
import s from './Auth.module.css';

export default function Auth({ onBack, onLogin }) {
  const [mode, setMode] = useState('login'); // login | register
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    if (!form.email || !form.password) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => {
        onLogin(form.email);
      }, 1200);
    }, 1800);
  };

  return (
    <div className={s.page}>
      {/* Background blobs */}
      <div className={s.blob1} />
      <div className={s.blob2} />
      <div className={s.blob3} />

      {/* Back button */}
      <button className={s.back} onClick={onBack}>← Back to Halpt</button>

      <div className={s.card}>
        {/* Left panel */}
        <div className={s.left}>
          <div className={s.logoWrap}>
            <div className={s.logoIcon}>H</div>
            <span className={s.logoText}>HALPT.ai</span>
          </div>
          <h2 className={s.leftTitle}>
            Your brand's<br />
            <span className={s.accent}>AI intelligence</span><br />
            starts here.
          </h2>
          <div className={s.stats}>
            <div className={s.stat}><span className={s.statVal}>10K+</span><span className={s.statLabel}>Brands Scanned</span></div>
            <div className={s.stat}><span className={s.statVal}>84%</span><span className={s.statLabel}>Avg AI Score</span></div>
            <div className={s.stat}><span className={s.statVal}>Free</span><span className={s.statLabel}>To Get Started</span></div>
          </div>
          <div className={s.avatarsRow}>
            {['#e56', '#5a9', '#58d', '#e93', '#9c5'].map((c, i) => (
              <div key={i} className={s.avatar} style={{ background: c }} />
            ))}
            <span className={s.avatarText}>100+ founders joined</span>
          </div>
        </div>

        {/* Right panel */}
        <div className={s.right}>
          {done ? (
            <div className={s.successWrap}>
              <div className={s.successIcon}>✓</div>
              <div className={s.successText}>
                {mode === 'login' ? 'Welcome back!' : 'Account created!'}
              </div>
              <div className={s.successSub}>Taking you to your dashboard...</div>
            </div>
          ) : (
            <>
              {/* Toggle */}
              <div className={s.toggle}>
                <button
                  className={`${s.toggleBtn} ${mode === 'login' ? s.toggleActive : ''}`}
                  onClick={() => setMode('login')}
                >Sign In</button>
                <button
                  className={`${s.toggleBtn} ${mode === 'register' ? s.toggleActive : ''}`}
                  onClick={() => setMode('register')}
                >Sign Up</button>
              </div>

              <h3 className={s.formTitle}>
                {mode === 'login' ? 'Welcome back 👋' : 'Create your account 🚀'}
              </h3>
              <p className={s.formSub}>
                {mode === 'login'
                  ? 'Sign in to access your brand intelligence dashboard'
                  : 'Start tracking your AI visibility for free'}
              </p>

              {/* Social login */}
              <div className={s.socialBtns}>
                <button className={s.socialBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Continue with Google
                </button>
                <button className={s.socialBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  Continue with GitHub
                </button>
              </div>

              <div className={s.divider}><span>or continue with email</span></div>

              {/* Form fields */}
              <div className={s.fields}>
                {mode === 'register' && (
                  <div className={s.row}>
                    <div className={s.fieldWrap}>
                      <label className={s.label}>First Name</label>
                      <input name="firstName" className={s.input} placeholder="John" value={form.firstName} onChange={handle} />
                    </div>
                    <div className={s.fieldWrap}>
                      <label className={s.label}>Last Name</label>
                      <input name="lastName" className={s.input} placeholder="Doe" value={form.lastName} onChange={handle} />
                    </div>
                  </div>
                )}
                <div className={s.fieldWrap}>
                  <label className={s.label}>Email</label>
                  <input name="email" type="email" className={s.input} placeholder="john@example.com" value={form.email} onChange={handle} />
                </div>
                <div className={s.fieldWrap}>
                  <label className={s.label}>Password</label>
                  <input name="password" type="password" className={s.input} placeholder="••••••••" value={form.password} onChange={handle} />
                </div>
              </div>

              {mode === 'login' && (
                <div className={s.forgot}>
                  <button className={s.forgotBtn}>Forgot password?</button>
                </div>
              )}

              <button className={s.submitBtn} onClick={submit} disabled={loading}>
                {loading ? <span className={s.spinner} /> : mode === 'login' ? 'Sign In →' : 'Create Account →'}
              </button>

              <p className={s.switchText}>
                {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button className={s.switchBtn} onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
                  {mode === 'login' ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
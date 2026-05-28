import { useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesStrip from './components/FeaturesStrip';
import AIQuotes from './components/AIQuotes';
import GrowthSimulator from './pages/GrowthSimulator';
import ConsultantChat from './pages/ConsultantChat';
import StartupStack from './pages/StartupStack';
import BrandResults from './pages/BrandResults';
import CTABottom from './components/CTABottom';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState('home');
  const [scanDomain, setScanDomain] = useState('');

  const handleNav = (pageName, domain = '') => {
    setPage(pageName);
    if (domain) setScanDomain(domain);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <Banner />
      <Navbar onNav={handleNav} activePage={page} />

      {page === 'home' && (
        <>
          <Hero onNav={handleNav} />
          <FeaturesStrip onNav={handleNav} />
          <AIQuotes />
          <CTABottom onNav={handleNav} />
        </>
      )}

      {page === 'results' && (
        <BrandResults domain={scanDomain} onBack={() => handleNav('home')} />
      )}

      {page === 'growth' && (
        <GrowthSimulator onBack={() => handleNav('home')} />
      )}

      {page === 'chat' && (
        <ConsultantChat onBack={() => handleNav('home')} />
      )}

      {page === 'stack' && (
        <StartupStack onBack={() => handleNav('home')} />
      )}

      <Footer onNav={handleNav} />
    </div>
  );
}
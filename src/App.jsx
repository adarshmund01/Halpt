import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesStrip from './components/FeaturesStrip';
import AIQuotes from './components/AIQuotes';
import GrowthSimulator from './pages/GrowthSimulator';
import ConsultantChat from './pages/ConsultantChat';
import StartupStack from './pages/StartupStack';
import CTABottom from './components/CTABottom';
import Footer from './components/Footer';
import BrandResults from './pages/BrandResults';
import Loader from './components/Loader';

export default function App() {
  const [page, setPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  // add to useState:
const [scanDomain, setScanDomain] = useState('');

// update onNav to accept a second param:
const handleNav = (page, domain = '') => {
  setPage(page);
  if (domain) setScanDomain(domain);
};



  return (
    
    <div className="app">
      <Banner />
      <Navbar onNav={setPage} activePage={page} />

      {page === 'home' && (
        <>
        
          <Hero onNav={setPage} />
          <FeaturesStrip onNav={setPage} />
          <AIQuotes />
          <CTABottom />
        </>
      )}

      return (
  <div className="app">
    {loading && <Loader onComplete={() => setLoading(false)} />}
    <Banner />
    <Navbar onNav={handleNav} activePage={page} />
    {/* rest of your code unchanged */}
  </div>
);
      {page === 'growth' && <GrowthSimulator onBack={() => setPage('home')} />}
      {page === 'chat' && <ConsultantChat onBack={() => setPage('home')} />}
      {page === 'stack' && <StartupStack onBack={() => setPage('home')} />}

      <Footer onNav={setPage} />
    </div>
  );
}

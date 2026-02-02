import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems'; // Repurposed as "Who Fits"
import { Solutions } from './components/Solutions'; // Repurposed as "What You Get"
import { Process } from './components/Process';
import { Requirements } from './components/Requirements';
import { Cases } from './components/Cases';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { StickyCTA } from './components/StickyCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Process />
        <Cases />
        <Requirements />
        <Pricing />
        <FAQ />
        <StickyCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
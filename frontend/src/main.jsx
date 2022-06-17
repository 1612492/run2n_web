import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/header';
import Intro from './components/intro';
import Features from './components/features';
import Marketplace from './components/marketplace';
import Roadmap from './components/roadmap';
import Contact from './components/contact';
import Footer from './components/footer';
import Main from './components/main';

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <Header />
    <Main>
      <Intro />
      <Features />
      <Marketplace />
      <Roadmap />
      <Contact />
    </Main>
    <Footer />
  </StrictMode>
);

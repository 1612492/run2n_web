import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/header';
import Intro from './components/intro';
import Video from './components/video';
import Features from './components/features';
import Marketplace from './components/marketplace';
import Roadmap from './components/roadmap';
import Testnet from './components/testnet';
import Contact from './components/contact';
import Footer from './components/footer';
import Main from './components/main';

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <Header />
    <Main>
      <Intro />
      <Video />
      <Features />
      <Marketplace />
      <Roadmap />
      <Testnet />
      <Contact />
    </Main>
    <Footer />
  </StrictMode>
);

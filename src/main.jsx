import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import Home from './pages/home';
import Mint from './pages/mint';

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mint-pass" element={<Mint />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer position="top-right" />
  </StrictMode>
);

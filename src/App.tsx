import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Painting from './pages/Painting';
import Drywall from './pages/Drywall';
import PressureWashing from './pages/PressureWashing';
import Staining from './pages/Staining';
import Epoxy from './pages/Epoxy';
import Caulking from './pages/Caulking';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/painting" element={<Painting />} />
          <Route path="/services/drywall" element={<Drywall />} />
          <Route path="/services/pressure-washing" element={<PressureWashing />} />
          <Route path="/services/staining" element={<Staining />} />
          <Route path="/services/epoxy" element={<Epoxy />} />
          <Route path="/services/caulking" element={<Caulking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
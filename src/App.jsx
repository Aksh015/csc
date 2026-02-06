import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import EventsPage from './pages/EventsPage'
import EventDetailsPage from './pages/EventDetailsPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'

// Lightweight component to redirect to external form when visiting /join-us
const RedirectJoin = () => {
  useEffect(() => {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSc4bSAVnIJfKgnX3X2xPbF6mE7B_80519fAK4hfX0pYu4bmQA/viewform?usp=dialog';
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);
  return null;
};

function App() {
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setShowCustomCursor(mq.matches);
    apply();
    // Safari < 14 uses addListener/removeListener
    if (mq.addEventListener) {
      mq.addEventListener('change', apply);
    } else if (mq.addListener) {
      mq.addListener(apply);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', apply);
      } else if (mq.removeListener) {
        mq.removeListener(apply);
      }
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        {showCustomCursor && <CustomCursor />}
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventname" element={<EventDetailsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join-us" element={<RedirectJoin />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
export default App;
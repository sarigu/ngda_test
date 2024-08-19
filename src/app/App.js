import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import SearchResultPage from '../pages/SearchResultPage';

function App() {
  return (
    <div className="relative">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

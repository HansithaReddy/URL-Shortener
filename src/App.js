import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShortenerPage from './Pages/ShortenerPage';
import StatsPage from './Pages/StatsPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
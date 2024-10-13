import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.js';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import NowPlaying from './pages/NowPlaying.jsx';
import Popular from './pages/Popular.jsx';
import TopRated from './pages/TopRated.jsx';
import Upcoming from './pages/Upcoming.jsx';
import Movies from './pages/Movies.jsx'; // 여기서 Movies를 import

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/movies" element={<Movies />} /> 
          <Route path="/" element={<NowPlaying />} />
          <Route path="/movies/now-playing" element={<NowPlaying />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/top-rated" element={<TopRated />} />
          <Route path="/movies/upcoming" element={<Upcoming />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import GlobalStyles from './styles/GlobalStyles.js';
import Navbar from './components/navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import NowPlaying from './pages/NowPlaying.jsx';
import Popular from './pages/Popular.jsx';
import TopRated from './pages/TopRated.jsx';
import Upcoming from './pages/Upcoming.jsx';
import Movies from './pages/Movies.jsx'; 
import MovieDetails from './pages/MovieDetails.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <div style={{display: 'flex',width:'100%' }}>
        <Sidebar style={{width:'250px',flexShrink:0}}/>
        <div style={{flexGrow:1}}>
        <Routes>
          <Route path="/movies" element={<Movies />} />  
          <Route path="/movies/now-playing" element={<NowPlaying />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/top-rated" element={<TopRated />} />
          <Route path="/movies/upcoming" element={<Upcoming />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<NowPlaying />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
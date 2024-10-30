// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RootLayout from './layout/root-layout';
import HomePage from './components/Home/home';
import Search from './components/Search/search';
import Login from './components/Authentication/login';
import Signup from './components/Authentication/signup';
import NotFound from './components/NotFound/not-found';

import Category from './components/Movie/Category';
import NowPlaying from './components/Movie/nowplaying';
import Popular from './components/Movie/popular';
import TopRated from './components/Movie/toprated';
import UpComing from './components/Movie/upcoming';
import MovieDetail from './components/Movie/Card/moviedetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/nowplaying" element={<NowPlaying />} />
          <Route path="/category/popular" element={<Popular />} />
          <Route path="/category/toprated" element={<TopRated />} />
          <Route path="/category/upcoming" element={<UpComing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

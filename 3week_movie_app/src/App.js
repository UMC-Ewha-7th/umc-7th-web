import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'category',
        element: <Category />,
        children: [
          {
            path: 'nowplaying',
            element: <NowPlaying />,
          },
          {
            path: 'popular',
            element: <Popular />,
          },
          {
            path: 'toprated',
            element: <TopRated />,
          },
          {
            path: 'upcoming',
            element: <UpComing />,
          }
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

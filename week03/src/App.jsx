import './App.css'

import{createBrowserRouter, RouterProvider} from "react-router-dom";
import styled from "styled-components";

import HomePage from './pages/home.jsx';
import NotFound from './pages/not-found.jsx';
import SearchPage from './pages/search.jsx';
import MoviesPage from './pages/movies.jsx';
import Category from './pages/category.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signup.jsx';
import RootLayout from './layout/root-layout.jsx';

import PopMovie from './pages/movies/popular.jsx';
import NowMovie from './pages/movies/nowplaying.jsx';
import TopMovie from './pages/movies/top-rated.jsx';
import UpMovie from './pages/movies/up-coming.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <NotFound/>,
    children:[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'search',
        element: <SearchPage/>
      },
      {
        path: 'movies',
        element: <Category/>
      },

      {
        path: 'movies/nowplaying',
        element: <NowMovie/>
      },
      {
        path: 'movies/popular',
        element: <PopMovie/>
      },
      {
        path: 'movies/top-rated',
        element: <TopMovie/>
      },
      {
        path: 'movies/up-coming',
        element: <UpMovie/>
      },

      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      }
      
    ]
  },
])

function App(){
  return <Mainpage> 
      <RouterProvider router={router}/>     
    </Mainpage>
}

const Mainpage = styled.div`
  width: 99vw;
  background-color: #121212;
`

export default App
import React from 'react';
import React from 'react';
import './App.css';
import CustomButton from './components/custom-button.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import Movies from './pages/movies.jsx';
import NotFound from './pages/not-found.jsx';
import RootLayout from './layout/root-layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/movies/:movieId',
        element: <Movies />,
      },
    ],
  },
]);

function practice() {
  return (
    <>
      <RouterProvider router={router} />
      <CustomButton />
    </>
  );
}

export default practice;

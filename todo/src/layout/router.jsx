import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../pages/not-found';
import MainPage from '../pages/mainPage';
import CreatePage from '../pages/createPage';
import DetailPage from '../pages/detailPage';
import ChangePage from '../pages/changePage';
import RootLayout from './root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'create',
        element: <CreatePage />,
      },
      {
        path: 'detail/:todoId',
        element: <DetailPage />,
      },
      {
        path: 'change',
        element: <ChangePage />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;

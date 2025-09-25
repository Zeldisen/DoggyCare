
import './index.css'
import App from './App.jsx'
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Welcome from './components/Welcome.jsx';
import FindDog from './components/FindDog.jsx';
import ShowDog from './components/ShowDog.jsx';
import PresentsDog from './components/PresentsDog.jsx';

const router = createHashRouter([
  {
    element: <App />, 
    children: [
      { path: '/', element: <Navigate to="/welcome" replace /> },
      { path: '/welcome', element: <Welcome /> },
      { path: '/findDog', element: <FindDog /> },
      { path: '/dogs/:chipNumber', element: <ShowDog /> },        
      { path: '/presentsDog', element: <PresentsDog /> },
      { path: '*', element: <Navigate to="/welcome" replace /> },
    ],
  },
])


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router= {router} />
    </StrictMode>
);

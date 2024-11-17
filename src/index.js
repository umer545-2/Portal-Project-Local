import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import './assets/sass/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

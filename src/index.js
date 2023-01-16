import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ReposProvider } from './contexts/repos.context';

import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ReposProvider>
      <App />
    </ReposProvider>
  </BrowserRouter>
);

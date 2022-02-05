import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './contexts/contexts';
import { BrowserRouter as Routes } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);


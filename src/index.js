import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // You can also import index.css if you have it
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
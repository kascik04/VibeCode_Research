import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Step 1: Render the main application component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
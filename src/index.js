import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

console.log(
  "%cHi👋, you can hire me here:%cLinked ⇨ https://www.linkedin.com/in/gabrielsdcarvalhaes/%cGithub ⇨ https://github.com/gabriel-dsdc (Better on LinkedIn)",
  "background: black; border-top: 1px solid green; border-left: 1px solid green; border-right: 1px solid green; color: green; padding: 0 124px; font-size: 2em; font-weight: bold;",
  "background: black; border-left: 1px solid green; border-right: 1px solid green; color: green; padding-right: 39px; font-size: 1.5em",
  "background: black; border-bottom: 1px solid green; border-left: 1px solid green; border-right: 1px solid green; color: gray; font-size: 1.5em; text-decoration: line-through",
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

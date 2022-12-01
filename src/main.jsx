import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImage from './assets/background.jpg';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{backgroundImage: `url(${BackgroundImage})`}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

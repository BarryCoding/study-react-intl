import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import IntlWrapper from './components/IntlWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntlWrapper>
      <App date={Date.now()} />
    </IntlWrapper>
  </React.StrictMode>
);

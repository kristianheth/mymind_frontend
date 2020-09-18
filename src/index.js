import React from 'react';
import ReactDOM from 'react-dom';
import AuthenticatedContainer from './containers/AuthenticatedContainer';
import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthenticatedContainer>
      <App />
    </AuthenticatedContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

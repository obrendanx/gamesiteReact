import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './app/store';
import { AuthProvider } from './Components/User/Auth/AuthContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <AuthProvider>
        <App />
      </AuthProvider>
    {/* </Provider> */}
  </React.StrictMode>
);

reportWebVitals();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import Store from './App/Store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import './index.css'
import './styles/resetCss.css'

import global_en from "./translations/en/global.json"
import global_es from "./translations/es/global.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "es", 
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>

    </Router>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/resetCss.css';

import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { NextUIProvider } from '@nextui-org/react';

i18next.init( {
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  }
} );

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <I18nextProvider i18n={ i18next }>
    <NextUIProvider>
      <App />
    </NextUIProvider>
    </I18nextProvider>
  </React.StrictMode>,
);

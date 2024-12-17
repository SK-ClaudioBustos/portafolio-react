import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import './App.css';
import Layout from './components/Layout';
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <Layout />
    </I18nextProvider>
  );
}

export default App;

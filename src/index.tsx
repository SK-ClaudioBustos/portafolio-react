import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
if (!root) throw new Error('Error al tratar de encontrar el elemento');

root.render(
  <App />
);

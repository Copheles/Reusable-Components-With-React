import './index.css'
import ReactDom from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/navigation';


const rootElement = document.getElementById('root');

const root = ReactDom.createRoot(rootElement)

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
)
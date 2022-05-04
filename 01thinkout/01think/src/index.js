import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux'
import { Provider } from 'react-redux'
// const store = createStore(forusername, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render (
  <StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </StrictMode>
)
serviceWorkerRegistration.register();

reportWebVitals();

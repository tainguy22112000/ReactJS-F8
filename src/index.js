import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { ThemeProvider } from './components/provider/ThemeContext';
import {StoreProvider} from './components/store';
=======
import { StoreProvider, StoreContext } from './store';
>>>>>>> 0ad6aa680de9f4b9aa7222a0e4d9c520fa2b0da7

const root = ReactDOM.createRoot(document.getElementById('root'));

// Fake comments
function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
          new CustomEvent(`lesson-${id}`, {
            detail: `Lesson ${id} content`
          }
        ))
    }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)
emitComment(4)



root.render(
  <React.StrictMode>
<<<<<<< HEAD
      <StoreProvider>
          <ThemeProvider>
              <Router>
                <App />
              </Router>
          </ThemeProvider> 
      </StoreProvider>
=======
    <StoreProvider>
      <App />
    </StoreProvider>
>>>>>>> 0ad6aa680de9f4b9aa7222a0e4d9c520fa2b0da7
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

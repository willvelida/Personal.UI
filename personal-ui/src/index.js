import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './components/navigationBar';
import MainHeader from './components/mainHeader';
import ContactMe from './components/contactMe';
import About from './components/about';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
    <MainHeader />
    <About />
    <ContactMe />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React , {useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//hoc
import  {Wrapper}  from './components/hoc/wrapper';
const Test1 =(
  <div>
  <p>hello world</p>
  <h1>hello mahsa</h1>
  </div>
  

);
const Test = (
   <Wrapper>
    <p>hi </p>
    <p>hi </p>
    <h2>hi </h2>
   </Wrapper>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode> 
    <App />
  </React.StrictMode>

  //hoc
    // Test  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

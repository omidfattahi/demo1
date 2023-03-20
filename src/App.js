import './App.css';
import React,{useState,useEffect,useRef} from 'react';
import Toolbar from './containers/header/toolbar/toolbar';
import { BrowserRouter,Routes , Route  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import AddStudent from './pages/Add-student';
import EditStudent from './pages/EditStudent';

function App() {
  return (
  <BrowserRouter>
   
    <div className="App">
    <Toolbar/>
    
    <Routes>
      <Route  path="/" index Component={HomePage} />
      <Route  path="/about"  Component={About} />
      <Route  path="/addstudent"  Component={AddStudent} />
      <Route  path="/student/*"  Component={EditStudent} />
    </Routes>

    </div>
    
    
    </BrowserRouter>



  );
}

export default App;




//... spread syntax
// /let desserts = ['cake', 'cookie', 'donut'];
// let desserts1 = ['icecream', 'flan', 'frozen yoghurt', ...desserts];
// console.log(desserts);
// //Appending baked_desserts after flan
// let desserts2 = ['icecream', 'flan', ...desserts, 'frozen yoghurt'];
// console.log(desserts2);
// // output
// [ 'cake', 'cookie', 'donut' ]
// [ 'icecream', 'flan', 'cake', 'cookie', 'donut', 'frozen yoghurt' ]
// function multiply(number1, number2, number3) {
//   console.log(number1 * number2 * number3);
// }
// let numbers = [1,2,3];
// multiply(...numbers);
// let array1 = ['h', 'e', 'l', 'l', 'o'];
// let array2 = [...array1];
// console.log(array2);
// ['h', 'e', 'l', 'l', 'o'] // output




// npm install --save react-router react-router-dom
// npm i -D react-router-dom
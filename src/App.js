import React from 'react';
import { Routes, Route, BrowserRouter,Link } from "react-router-dom";

//Screens Import
import Home from './Home';
import Search from './Search';
import MovieBox from './MovieBox';
function App() {
  return (
    <div className="App">
      <div className="content">
        <h1> Bot Flix</h1>
          <div>
          <input className='button' type='submit' value={'Search'}/>
            
        </div>

        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>

          
          {/* <Route path='/movieBox' element={<MovieBox />}></Route>  */}
          
          


          

          
          </Routes>
        </BrowserRouter>
      
      </div>
    </div>
  );
}

export default App;
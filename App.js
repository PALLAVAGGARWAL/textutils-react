import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import { useState } from 'react';
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const[Mode,setMode]= useState('light');

  const toggleMode = ()=> {
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
<Navbar title="Textutils2" mode={Mode} toggleMode={toggleMode}/>
<div className='container my-3'>
                  <TextForm  heading ="Enter the text to analyze" mode={Mode}/>
                  
          </div>
    {/* <Router>
<Navbar title="Textutils2" mode={Mode} toggleMode={toggleMode}/>
<Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <div className='container my-3'>
                  <TextForm  heading ="Enter the text to analyze" mode={Mode}/>
          </div>
          </Route>
        </Switch>



</Router> */}
{/* 
<BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={Mode}
          toggleMode={toggleMode}
        /> */}
     
        {/* <div className="container my-4" mode={Mode}>
          <Routes>
            <Route exact path="/about" element={<About/>}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                 
                  heading="Enter Text to analyze "
                  mode={Mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter> */}
    </>
    
  );
}

export default App;

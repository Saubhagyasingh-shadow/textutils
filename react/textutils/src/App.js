import logo from './logo.svg';
import  './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import About from './components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

let name="harry"
function App() {
  const [mode,setMode]=useState('dark');//WHETther dark mode is enavled or not
  const[alert,setAlert]=useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
           setAlert(null)
      },3000);
    }
    const toggleMode=()=>{
      if(mode== 'light'){
        setMode('dark')
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode has been enabled","success");
        // document.title='TextUtils-Dark Mode';
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("light mode has been enabled","success");
        // document.title='TextUtils-Light Mode';

      }
    }
  return (
    <> 
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="TextUtils- WordCounter,Character Counter" mode={mode}/>}>
          </Route>
        </Routes>
        {/* <Textform showAlert={showAlert} heading="TextUtils- WordCounter,Character Counter" mode={mode}/> */}
    </div>
    </Router>
 </> )
}

export default App;

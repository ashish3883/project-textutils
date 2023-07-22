import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textform';
import ToDos from './components/Todos';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#333333'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white'
    }
  }
  return (
    <>
    <Navbar title='TextUtil' aboutText='About Us' Home='Our Home' mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Textarea title='Enter Text Here' mode={mode}/>
    {/* <About/> */}
    {/* <ToDos mode={mode}/> */}
    </div>
    </>
  );
}

export default App;

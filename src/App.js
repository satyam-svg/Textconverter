
import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
// import About from './components/About.js';
import { useState } from 'react';
function App() {
  const [mode,setmode]=useState("light")
  const [text,settext]=useState("Enable Dark mode");
const togglemode=()=>{
  if(mode==='light'){
    setmode('dark');
    settext('Enable light mode');
    document.body.style.backgroundColor='#343a40';
    document.body.style.color='White';
  }else{
    setmode('light');
    settext('Enable dark mode');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
  }
}
  return (
    <>
     <Navbar mode1={mode} text1={text} togglemode={togglemode} />
     <Textform title="Analyse your keywords" />
     {/* <About title="About Us"/> */}
     </>
  );
}

export default App;

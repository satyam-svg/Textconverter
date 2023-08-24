
import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import Alert from './components/Alert.js';
// import About from './components/About.js';
import { useState } from 'react';
function App() {
  const [mode,setmode]=useState("light")
  const [text,settext]=useState("Enable Dark mode");
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
     setalert({
      msg:message,
      type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 1000);
  }
const togglemode=()=>{
  if(mode==='light'){
    setmode('dark');
    settext('Enable light mode');
    document.body.style.backgroundColor='#343a40';
    document.body.style.color='White';
    showalert('Dark mode enabled','success')
    document.title='Textconverter-Dark mode'
  }else{
    setmode('light');
    settext('Enable dark mode');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    showalert('Light mode enabled','success')
    document.title='Textconverter-Light mode'
  }
}
  return (
    <>
     <Navbar mode1={mode} text1={text} togglemode={togglemode} />
     <Alert alert={alert}/>
     <Textform title="Analyse your keywords" showalert={alert} />
     {/* <About title="About Us"/> */}
     </>
  );
}

export default App;

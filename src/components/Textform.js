
import React, { useState } from 'react';

export default function Textform(props) {
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showalert('Letters are converted in uppercase','success')

    }
    const handleloclick=()=>{
        
        let newtext=text.toLowerCase();
        
        setText(newtext)
        props.showalert('Letters are converted in Lowercase','success')

    }
    const handleclr=()=>{
      let newtext="";
      setText(newtext);
      props.showalert('Text Cleared','success')
    }
    const handlesentence=()=>{
      let newtext=text[0].toUpperCase();
       let newtext1=text.slice(1).toLowerCase();
       setText(newtext+newtext1);
       props.showalert('Words are now sentence','success')
    }
    const handleCapital = () => {
      const words = text.split(" ");
      props.showalert('Converted in capital letter','success') // Split the text into words
  
      for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
  
      setText(words.join(" "));
  }
  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
  
    
    const show=(event)=>{
        console.log("change ocuur")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    
<div className="mb-3 my-5 mx-5">
<h1>{props.title}</h1>
  <textarea className="form-control"  value={text} onChange={show} id="mybox" rows="3"></textarea>
  <button type="button"  onClick={handleupclick} className="btn btn-primary my-4">Uppercase</button>
  <button type="button"  onClick={handleloclick} className="btn btn-primary my-4 mx-2">Lowwercase</button>
  <button type="button"  onClick={handleclr} className="btn btn-primary my-4 mx-2">Clear Text</button>
  <button type="button"  onClick={handlesentence} className="btn btn-primary my-4 mx-2">Sentence</button>
  <button type="button"  onClick={handleCapital} className="btn btn-primary my-4 mx-2">Capitalize Case</button>
  <button type="button"  onClick={copyToClipboard} className="btn btn-primary my-4 mx-2">Copy Text</button>
</div>
<div className="container my-1 mx-5">
    <h5 >{text.split(" ").length} and {text.length}</h5>
    <h5 >{0.08*(text.split(" ").length) } minutes it will take to read.</h5>
<h1 >Preview</h1>
    <h2 >{text}</h2>
</div>
</>
  )
}

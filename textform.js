import React ,{useState} from 'react'

export default function TextForm(props) {

    const HandleUpClick= () => {
        console.log("Uppercase was clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const HandleLowClick= () => {
        console.log("Uppercase was clicked"+ text);
        let newText= text.toLowerCase();
        setText(newText)
    }
    const HandleClearClick= () => {
        console.log("Uppercase was clicked"+ text);
        let newText= ("");
        setText(newText)
    }
    const handleOnChange= (event) => {
        console.log("On Change");
        setText(event.target.value)
    }
    const handleCopyText = ()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const[text,setText]= useState('Enter the text');
   // setText=('hello');
  return (
    <>
    <div className="continer">
     <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value= {text} onChange= {handleOnChange} id="myBox" rows="6" style={{backgroundColor: props.Mode==='dark'?'grey':'white'}}></textarea>
</div>
    <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={HandleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
    </div>
     <br></br>
    <div className="container">
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.009*text.split(" ").length} minutes read </p>
        <h2>Purview</h2>
        <p> {text}</p>
    </div>
    </>
  )
}

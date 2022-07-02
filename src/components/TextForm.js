import React,{useState} from 'react'

export default function TextForm(props) {

  const countchars = ()=>{
    let newText = text;
    let count2 = 0;
    for(let i=0;i<newText.length;i++){
      if(newText[i]!==" "){
       count2++;
      }
    }
    return count2;
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if(newText.length>0){
        props.showAlert("Converted to uppercase","success");
    }
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(newText.length>0){
        props.showAlert("Converted to lowercase","success");
    }
  };

  const handleCopy = () => {
    let newText = text;
    navigator.clipboard.writeText(newText);
    if(newText.length>0){
        props.showAlert("Copied to clipboard","success");
    }
    document.getSelection().removeAllRanges();
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    if(newText.length>0){
        props.showAlert("Cleared","success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className="form-control" id="myBox" rows="8" value={text}  style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-warning mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-danger mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <h2>Preview</h2>
        <p>{text}</p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters(spaces included)</p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {countchars()} characters(spaces excluded)</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word reading time</p>
    </div>
    </>
  )
}

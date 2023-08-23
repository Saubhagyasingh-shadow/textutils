import React, { useState } from 'react';


export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    
    const handlelowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleClearClick=()=>{
        let newText=" ";
        setText(newText);
    }
 const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
 }
 const handleCopy=()=>{
    
    navigator.clipboard.writeText(text);
    props.showAlert("copied to ClipBoard","success");
 }

    //state use hooks in react in hooks first param is the name of the variable and the second text is the function which will run after setting it
    //can see hooks documentation
    const [text, setText] = useState(' ');
    //** settext here sets the value of text*/
    //ab main text ko jahaan bhi use krunga aur jb bhi update krunga vo update ho jayega sb jgh apne aap
    //yahan array destructuring usr hogi hum text value change nhi kar skte par humein vo change ek function ki madad se karni pdegi aur toh hum jo bhi value settext main dalenge vhi text ki value ho jayegi
    // text='new text' //wrong way to set text
    // setText("new text")//correct way to set text

    return (
        <>
        <div style= {{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-2">
                <textarea className="form-control " onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode === 'dark'?'white':'black'}} id="mybox" cols="6" rows="8"
                />
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Convert to lowerrcase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>COPY TEXT</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>HandleExtraspaces</button>

        </div>
        <div className="container my-2"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>words is {text.split(" ").filter((element)=>{return element.length!==0}).length} and characters is {text.length}</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}


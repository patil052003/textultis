import React, { useState } from 'react'

export default function Textform(props) {
    const handleupclick =()=>{
        console.log("upper case was clicked"+text);
        let newtext =text.toUpperCase();
        setText(newtext)
        props.showalert("converted to uppercase","success")
        
    }
    const handlelowclick =()=>{
      console.log("lower case was clicked"+text);
      let newtext =text.toLowerCase();
      setText(newtext)
      props.showalert("converted to lowercase","success")
      
  }
  const handleclearclick =()=>{
    let newtext ='';
    setText(newtext)
    props.showalert("cleard text","success")
    
}
    const handleonchange =(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const handleremoveclick =()=>{
      console.log("removing spaces");
      var newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showalert("removed extra spaces","success")
    }
  const handlecopy =()=>{
    console.log("i am copy");
    var copyText=document.getElementById("MYBOX");
    copyText.select();
    copyText.setSelectionRange(0,9999);
    navigator.clipboard.writeText(copyText.value);
    props.showalert("copied to clipboard","success")
}
    const [text,setText] =useState('');
  return (
    <>
    <div className="container" style={{Color:props.mode=='gray'?'white':'light blue'}}  >
      <h1>{props.heading}</h1>
      <div class="mb-3"style={{Color:props.mode=='gray'?'white':'light blue'}}>
        <label for="MY BOX" className="form-label">Enter the text here</label>
        <textarea className="form-control"  value= {text} onChange={handleonchange}  style={{backgroundColor:props.mode=='light'?'gray':'white',color:props.mode=='gray'?'white':'light blue'}} id="MYBOX" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleupclick}>convert to upper case</button>
      <button className="btn btn-primary mx-2  my-2" onClick={handlelowclick}>convert to lower case</button>
      <button className="btn btn-primary mx-2  my-2" onClick={handleclearclick}>clear text</button>
      <button className="btn btn-primary mx-2  my-2" onClick={handleremoveclick}>remove extra spaces</button>
      <button className="btn btn-primary mx-2  my-2" onClick={handlecopy}>copy text</button>


    </div>
    <div className="container my=3"style={{Color:props.mode=='gray'?'white':'light blue'}} >
      <h2>your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
      <p>{0.008*text.split("").length}minutes are required to read</p>
      <p>preview</p>
      <p>{text.length>0?text:"enter here something to textbox above to preview it here"}</p>
      
    </div>
    </>
  )
} 
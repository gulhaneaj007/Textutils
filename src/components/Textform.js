import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('')

    const changeUPcase=()=>{
        let nextext=text.toUpperCase();

        setText(nextext )
    }
    const changeLowercase=()=>{
      let nextext=text.toLowerCase();

      setText(nextext )
  }

    const handleOnchange=(event)=>{
        setText(event.target.value);

    }

    const handleCopy=()=>{
      var text = document.getElementById('myBox')
      text.select()
      navigator.clipboard.writeText(text.value)
    }

    const handleSpace=()=>{
      var Newtext = text.split(/[ ]+/);
      setText(Newtext.join(' '))
    }


    return (
      <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#052038'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#052038'}} onChange={handleOnchange}></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={changeUPcase}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={changeLowercase}>Lowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra space</button>



    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#052038'}}>
      <h4>Your text summery</h4>
      <p>Words <b>{text.split(" ").length}</b> and <b>{text.length}</b> Charecter</p>
      <p><b>{0.008* text.split(" ").length}</b> Minutes to read</p>
      <h3>Preview</h3>
      <p>{text===''?'Enter something to preview here':text}</p>
    </div>
    
    </>
  )
}

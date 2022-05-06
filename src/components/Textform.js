import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('')

    const changeUPcase=()=>{
        // console.log("click") 
        let nextext=text.toUpperCase();

        setText(nextext )
    }
    const changeLowercase=()=>{
      // console.log("click") 
      let nextext=text.toLowerCase();

      setText(nextext )
  }

    const handleOnchange=(event)=>{
        // console.log("Done ")
        setText(event.target.value);

    }
    return (
      <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnchange}></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={changeUPcase}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={changeLowercase}>Lowercase</button>

    </div>
    <div class="container my-3">
      <h4>Your text summery</h4>
      <p>Words <b>{text.split(" ").length}</b> and <b>{text.length}</b> Charecter</p>
      <p><b>{0.008* text.split(" ").length}</b> Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    
    </>
  )
}

import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('Enter text here')

    const changeUPcase=()=>{
        // console.log("click") 
        let nextext=text.toUpperCase();

        setText(nextext )
    }

    const handleOnchange=(event)=>{
        // console.log("Done ")
        setText(event.target.value);

    }

    return (
      <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnchange}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={changeUPcase}>Convert to UpperCase</button>
    </div>
    </>
  )
}

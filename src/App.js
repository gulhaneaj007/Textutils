import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert'
// import About from './components/About';
import React,{useState} from 'react';

function App() {

  const [mode, setmode] = useState('light')

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#052038';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
<>   
    <Navbar title="TextUtils" AboutText="About US"  mode={mode} toggleMode={toggleMode}/>
    <Alert  Alert="This is alert" />
    <div className='container my 3'>
      <Textform  heading="Enter text to analyse below"   mode={mode} />
      {/* <About/> */}
    </div>

</>


  );
}
 
export default App;

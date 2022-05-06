import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
<>   
    <Navbar title="TextUtils" AboutText="About US"/>
    <div className='container my 3'>
      <Textform  heading="Enter text to analyse below"  />
    </div>

</>


  );
}
 
export default App;

import React,{useState} from 'react'
import './App.css';
import Nav from './Additem/Nav';
import Form from './Additem/Form';
import Alert from './Additem/Alert';

function App() {

const [mode, setMode] = useState('light');
const [green, setGreen] = useState('light');
const [alert, setAlert] = useState( false);
const showalert=(message,type)=>{
  setAlert({
    message : message,
    type : type
  })
setTimeout(() => {
  setAlert(false);
}, 2000);
}

const switchmode=()=>{
  if(mode==='light'){
    setMode('dark');
  document.body.style.color='white';
  document.body.style.backgroundColor='black';
  showalert("Dark Mode Has Been Enable", "success");
  }
  else{
    setMode('light');
    document.body.style.color='black';
    document.body.style.backgroundColor='white';
    showalert("Light Mode Has Been Enable", "success");
  }
}
const switcgreen=()=>{
  if(green==='light'){
    setGreen('success');
  document.body.style.color='black';
  document.body.style.backgroundColor='lightgreen';
  showalert("Green Mode Has Been Enable", "success");
  }
  else{
    setGreen('light');
    document.body.style.color='black';
    document.body.style.backgroundColor='white';
    showalert("Light Mode Has Been Enable", "success");
  }
}

  return (
    <>
     
    <Nav title="TextUlits" aboutText="About" mode={mode} green={green} switchmode={switchmode} switcgreen={switcgreen}/>
 
  <div className="container">
          <Form heading="Enter the text to analyze" showalert={showalert}/>
        <Alert  alert={alert}/>
    </div>
   
    
    </>
  );
}

export default App;

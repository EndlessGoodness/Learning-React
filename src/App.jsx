import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [heading, setCount] = useState("Magnificient Monsters")
  const clickhandler=()=>{
    setCount("Rabba");
  };
  return (
    <>
      <h1>{heading}</h1>
      <button type="button" onClick={clickhandler}>change</button>
    </>
  );
};

export default App

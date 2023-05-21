import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Scroll from "react-scroll"
import './App.css'
import LeftBar from './component/sideBarLeft'
import RightBar from './component/sideBarRight'
import MainSection from "./component/MainSection"

function App() {
  const [state, setState] = React.useState(true);
  document.body.style.backgroundColor = state ? "#eee" : "#343333";

  return (
    <div className="App" style={{
      backgroundColor: state ? "#eee" : "#222"
    }}>
      <LeftBar stt={state} change={() => setState(st => !st)} />
      <MainSection stt={state} />
      <RightBar stt={state} change={() => setState(st => !st)} />
    </div>
  )
}

export default App

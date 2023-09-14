import React from 'react'
import './App.css'
import LeftBar from './component/sideBarLeft'
import RightBar from './component/sideBarRight'
import MainSection from "./component/MainSection"
import { useSelector } from 'react-redux'

function App() {
  const {mode} = useSelector(state => state.darkMode)
  document.body.style.backgroundColor = mode ? "#eee" : "#888";

  return (
    <div className="App" >
      <LeftBar change={() => setState(st => !st)} />
      <MainSection />
      <RightBar change={() => setState(st => !st)} />
    </div>
  )
}

export default App

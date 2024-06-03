import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tabs from './Component/CustomTabs/Tabs'
import CountDown from './Component/CountDownTimer/CountDown'
import LoginSignup from './Component/LoginSignUp/LoginSignup'
import OverlayModel from './Component/ModelOverlay/OverlayModel'
import Accordian from './Component/AccordianOrFAQ/Accordian'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/tabs' element={<Tabs />} />
        <Route path='/countdown' element={<CountDown />} />
        <Route path='/loginsignup' element={<LoginSignup />} />
        <Route path='/model' element={<OverlayModel />} />
        <Route path='/accordian' element={<Accordian />} />
      </Routes>

    </>
  )
}

export default App

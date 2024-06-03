import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tabs from './Component/CustomTabs/Tabs'
import CountDown from './Component/CountDownTimer/CountDown'
import CalculatorComponent from './Component/Calculator/CalculatorComponent'
import LoginSignup from './Component/LoginSignUp/LoginSignup'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/tabs' element={<Tabs />} />
        <Route path='/countdown' element={<CountDown />} />
        <Route path='/calculator' element={<CalculatorComponent />} />
        <Route path='/loginsignup' element={<LoginSignup />} />
      </Routes>

    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tabs from './Component/CustomTabs/Tabs'
import CountDown from './Component/CountDownTimer/CountDown'
import LoginSignup from './Component/LoginSignUp/LoginSignup'
import OverlayModel from './Component/ModelOverlay/OverlayModel'
import Accordian from './Component/AccordianOrFAQ/Accordian'
import Pagination from './Component/Pagination/Pagination'
import Home from './Component/E-Comm/Home'
import Cart from './Component/E-Comm/Cart'
import ProductDetails from './Component/E-Comm/ProductDetails'
import ImageCorousel from './Component/Corousel/ImageCorousel'
import Stopwatch from './Component/StopWatch/Stopwatch'
import ToDo from './Component/ToDoApp/ToDo'
import ToDoRedux from './Component/ToDoWithRedux/ToDoRedux'
import InfiniteScroll from './Component/InfiniteScroll/InfiniteScroll'
import UseContextHook from '../Hooks/UseContextHook'
import UseReducerHook from '../Hooks/UseReducerHook'
import ProgressBar from './Component/ProgressBar/ProgressBar'
import StarRating from './Component/StarRating/StarRating'
import AnotherTodo from './Component/AnotherTODO'
import OTP from './Component/OTP/OTP'
import ProtectedRoutes from './Utils/ProtectedRoutes'
import DarkMode from './Component/DarkMode'
import MultiStepperForm from './Component/MultiStepperForm/MultiStepperForm'

const App = () => {

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<h1>Home page</h1>} />
        </Route>

        <Route path='/tabs' element={<Tabs />} />
        <Route path='/countdown' element={<CountDown />} />
        <Route path='/loginsignup' element={<LoginSignup />} />
        <Route path='/model' element={<OverlayModel />} />
        <Route path='/accordian' element={<Accordian />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/ecomm' element={<Home />} />
        <Route path='/ecome-cart' element={<Cart />} />
        <Route path='/image-corousel' element={<ImageCorousel />} />
        <Route path='/stop-watch' element={<Stopwatch />} />
        <Route path='/todo' element={<ToDo />} />
        <Route path='/redux-todo' element={<ToDoRedux />} />
        <Route path='/infinite-scroll' element={<InfiniteScroll />} />
        <Route path='/progress-bar' element={<ProgressBar />} />
        <Route path='/star-rating' element={<StarRating />} />
        <Route path='/usecontexthook' element={<UseContextHook />} />
        <Route path='/usereducerhook' element={<UseReducerHook />} />
        <Route path='/anothertodo' element={<AnotherTodo />} />
        <Route path='/otp' element={<OTP />} />
        <Route path='/dark-mode' element={<DarkMode />} />
        <Route path='/multi-stepper-form' element={<MultiStepperForm />} />
      </Routes>

    </>
  )
}

export default App

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
function RouterWraper({setAuth}) {
  return (
    <Routes >
        <Route path='/' element={<Login setAuth={setAuth} />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
    </Routes>
  )
}

export default RouterWraper
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Form' element={<Form />} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

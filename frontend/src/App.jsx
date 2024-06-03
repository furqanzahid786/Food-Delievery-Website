import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Router>
       <Routes>
          <Route  path='/'      element={<Home/>}   />
          <Route  path='/cart'  element={<Cart/>}  />
          <Route  path='/order' element={<PlaceOrder/>}  />
        </Routes>
      </Router>
    </div>
  )
}

export default App

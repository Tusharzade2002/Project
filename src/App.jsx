import React from 'react'
import Slidbar from './Layout/Sliderbar'
import Home from './Pages/Home'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Pagenotfound from './Pages/Pagenotfound'
import Products from './Pages/Products'
import User from './Pages/User'
import Blogs from './Pages/Blogs'
import Navbar1 from './Layout/Navbar1'
function App() {
  return (
    <Router>
    <div className='d-flex' style={{position:"relative"}}>
      <div className='col-auto w-20' >
        <Slidbar />
      </div>
  <div className='d-flex flex-column w-80'>
         <div><Navbar1/> </div>
      <div className=''>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/pagenotfound" element={<Pagenotfound/>} />
        </Routes>
      </div>
 </div>
    </div>
    </Router>
  )
}

export default App
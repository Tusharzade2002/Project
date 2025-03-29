import React from 'react'
import Slidbar from './Layout/Sliderbar'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Pagenotfound from './Pages/Pagenotfound'
import Products from './Pages/Products'
import User from './Pages/User'
import Navbar1 from './Layout/Navbar1'
function App() {
  return (
    <Router>
    <div className='d-flex' style={{position:"relative"}}>
      <div className='col-auto' >
        <Slidbar />
      </div>
  <div className='d-flex flex-column w-100'>
         <div><Navbar1/> </div>
      <div className=''>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/blog" element={<User/>} />
          <Route path="/pagenotfound" element={<Pagenotfound/>} />
        </Routes>
      </div>
 </div>
    </div>
    </Router>
  )
}

export default App
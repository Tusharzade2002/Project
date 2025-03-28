import React from 'react'
import Slidbar from './Layout/Sliderbar'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Pagenotfound from './Pages/Pagenotfound'
function App() {
  return (
    <Router>
    <div className='d-flex'>
      <div className=''>
        <Slidbar/>
      </div>
      <div className='flex-grow-1'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/pagenotfound" element={<Pagenotfound/>} />
        </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App
import React from 'react'
import mainimg from '../assets/Blog/blogimg.jpg'
function Blogs() {
  return (
    <div>
       <div className='mx-0 p-5 d-flex justify-content-between' style={{backgroundColor:"#1C5551" ,width:"100%"}}>
                 <div className='text-light' >
                     <div style={{fontWeight:"bold"}}>POST</div>
                     <div style={{fontSize:"20px"}}>What Are Employer Benefits Packages & How to Offer Them?</div>
                 </div>
                 <div>
                       <img className='rounded' style={{height:"290px"}} src={mainimg} alt='...'/>
                 </div>
       </div>
    </div>
  )
}

export default Blogs
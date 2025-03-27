
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Collapse } from 'bootstrap';
import  './Navbar.css'
function Navbar1() {
  const  [iscollapsed ,setiscollapsed] =useState(false)
  const toggleSlider=()=>{
    setiscollapsed(!iscollapsed)
  }
// const collapsedStyle = { width: "3rem", background: "gray" };
// const expandedStyle = { width: "12rem", background: "gray" };
// style={iscollapsed? collapsedStyle : expandedStyle}
  return (
   
<div className='sidebar-text'  style={{
                  width: iscollapsed ? "3rem " : "9rem",  
                  height: "100vh",
                  backgroundColor:"black",
                  color:"white",
                  position:"relative"
             }}>
  <div className='d-flex align-items-center'> 
     <div><CgProfile /></div>
     <div className=''> <div className='text'> {!iscollapsed && "Tushar Zade"} </div> </div>
  </div>
  < IoReorderThreeOutline style={{color:"white"}} className='d-sm-none threeline-icon'  onClick={toggleSlider} />
     <div className='ms-3 mt-3'>    
             <div className='d-flex align-items-center my-3'> <FaHome /> <div className='text'> {!iscollapsed && " DashBoard"} </div>  </div> 
             <div className='d-flex align-items-center my-3'> <MdOutlineProductionQuantityLimits className=''/>  <div className='text'>{!iscollapsed && "Products"} </div> </div> 
             <div className='d-flex align-items-center my-3'> <MdAddCard /> <div className='text'>{!iscollapsed && "Blogs"} </div> </div> 
             <div className='d-flex align-items-center my-3'> <FaUser /> <div className='text'> {!iscollapsed && "User"} </div> </div> 
    </div>
         
</div>
  )
}

export default Navbar1
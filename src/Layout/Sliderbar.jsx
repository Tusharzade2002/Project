import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiMenu, BiX } from "react-icons/bi";
import "./Slidebar.css";
function Slidbar() {
  const [iscollapsed, setiscollapsed] = useState(false);
  const toggleSlideropen = () => {
    setiscollapsed(!iscollapsed);
  };

  return (
    <>
    
      <div
        className="Desktop-view"
        style={{
          width: "13rem",
          backgroundColor: "black",
          color: "white",
          height: "100vh",
        }}
      >
        <div className="d-flex justify-content-around pt-4">
          <div>
            <CgProfile size={20} />
          </div>
          <div>Tushar  Zade </div>
        </div>

        <div className="ms-3 mt-4">

         <Link> <div className="d-flex align-items-center my-3">
             <FaHome className="me-3"/> DashBoard
          </div></Link>

          <Link><div className="d-flex align-items-center my-3">
            <MdOutlineProductionQuantityLimits className="me-3"/> Products
          </div></Link>
        <Link>  <div className="d-flex align-items-center my-3">
            <MdAddCard className="me-3"/>Blogs
          </div></Link>
          <Link><div className="d-flex align-items-center my-3">
            <FaUser className="me-3"/> User
          </div></Link>
        </div>
      </div>
      {/* mobile virew code */}

      <button className="mobile-view" onClick={toggleSlideropen} style={{backgroundColor:"black",color:"white",border:"none"}}>
          {iscollapsed ? <BiX />  : <BiMenu />}
        </button>
      <div
        className=" mobile-view pt-2"
        style={{
          backgroundColor: "black",
          color: "white",
          height: "100vh",
          position: "relative",
          // width:"0px"
          width: !iscollapsed ? "0%" : "20%",
        }}
      >
        <div className="text-center">
          <div>
            <CgProfile size={22} />
          </div>
        </div>
      
        <div className="d-flex flex-column align-items-center mt-3">
          <div className="d-flex align-items-center my-3">
           
            <FaHome size={20} /> {!iscollapsed ? "" : "User"}{" "}
          </div>
          <div className="d-flex align-items-center my-3">
         
            <MdOutlineProductionQuantityLimits size={20} />{" "}
            {!iscollapsed ? "" : "Product"}{" "}
          </div>
          <div className="d-flex align-items-center my-3">
            
            <MdAddCard size={20} />
            {!iscollapsed ? "" : "Cards"}{" "}
          </div>
          <div className="d-flex align-items-center my-3">
           
            <FaUser size={20} />
            {!iscollapsed ? "" : "Profile"}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slidbar;

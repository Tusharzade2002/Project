import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Slidebar.css";
function Slidbar() {
  const [iscollapsed, setiscollapsed] = useState(false);
  const toggleSlideropen = () => {
    setiscollapsed(!iscollapsed);
    console.log("function")
  };

  return (
    <>
    {/* // Desktop view code */}
      <div
        className="Desktop-view"
        style={{
          width: "12rem",
          backgroundColor: "#333333",
          color: "white",
          zIndex:"999",
        }}
      >
        <div className="d-flex justify-content-around pt-4">
          <div>
            <CgProfile size={20} />
          </div>
          <div>Tushar Zade </div>
        </div>

        <div className="ms-3 mt-4 ">
        
           <Link to='/'>
            <div  style={{textDecoration: "none"}} className="d-flex align-items-center my-3  text-light" >
              <FaHome className="me-3" /> <span> DashBoard</span>
            </div>
            </Link>
         

          <Link to="/product">
            <div className="d-flex align-items-center my-3 text-light ">
              <MdOutlineProductionQuantityLimits className="me-3" /> Products
            </div>
          </Link>
          <Link to="/blog">
            <div className="d-flex align-items-center my-3 text-light">
              <MdAddCard className="me-3" />
              Blogs
            </div>
          </Link>
          <Link to="/user">
            <div className="d-flex align-items-center my-3 text-light">
              <FaUser className="me-3" /> User
            </div>
          </Link>
        </div>
      </div>
      {/* mobile view code */}

      <button
        className="mobile-toggle"
        onClick={toggleSlideropen}
        style={{ backgroundColor: "#333333", color: "white", border: "none"  }}
      >
        <BiMenu />    
        
      </button>
      <div 
        className={` mobile-view pt-2 m-0 `}
        style={{
          backgroundColor: "#333333",
          color: "white",
          height: "100% !important",
          width: !iscollapsed ? "0%" : "7rem",
          position:"absolute",
          zIndex:"999"
        }}
      > 
      <div>
        <div onClick={toggleSlideropen} className={`${!iscollapsed? "d-none":"d-block"}`} ><BiX/></div>
        <div className={`text-center `}  >
          <div className={`${!iscollapsed? "d-none":"d-block"}`}>
            <CgProfile size={22} />Tushar
          </div>
        </div>

        <div className={` d-flex flex-column align-items-center  mt-3 ${!iscollapsed? "d-none":"d-block"}`}>
          <Link to="/">
             <div className="d-flex align-items-center my-3 text-decoration-none text-light">
               <FaHome size={20} />Dashboard
             </div>
          </Link>
          <Link to="/">
          <div className="d-flex align-items-center my-3 text-decoration-none text-light">
            <MdOutlineProductionQuantityLimits size={20} />
            Product
          </div>
          </Link>
          <Link to="/">
          <div className="d-flex align-items-center my-3 text-decoration-none text-light">
            <MdAddCard size={20} />
            Blogs
          </div>
          </Link>
          <Link to="/">
          <div className="d-flex align-items-center my-3 text-decoration-none text-light">
            <FaUser size={20} />
            User
          </div>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default Slidbar;

import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <div className='container' >
       <div className="items" style={{backgroundColor:"#1a53ff"}}>
            <div className='m-4'style={{color:"white"}}>
                <p style={{fontSize:"20px" ,fontWeight:"bold"}}>Total Income</p>
                <p>$ 567654</p>
                <p>saved 20%</p>
            </div>
        </div>
        <div className="items" style={{backgroundColor:"#4da6ff"}}>
            <div className='m-4'style={{color:"white"}}>
                <p style={{fontSize:"20px" ,fontWeight:"bold"}}>Total Expense</p>
                <p>$ 567654</p>
                <p>saved 20%</p>
            </div>
        </div>
        <div className="items" style={{backgroundColor:"#8c1aff"}}>
            <div className='m-4' style={{color:"white"}}>
                <p style={{fontSize:"20px" ,fontWeight:"bold"}}>Total Income</p>
                <p>$ 567654</p>
                <p>saved 20%</p>
            </div>
        </div>
        <div className="items" style={{backgroundColor:"#70db70"}}>
            <div className='m-4'style={{color:"white"}}>
                <p style={{fontSize:"20px" ,fontWeight:"bold"}}>Total Income</p>
                <p>$ 567654</p>
                <p>saved 20%</p>
            </div>
        </div>
    </div>
 
        
        </>
  )
}

export default Home
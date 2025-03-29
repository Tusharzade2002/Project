import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge';
import star from '../assets/star.png'

import axios from "axios"
import "./product.css"
function Product() {
      const [Product,setProduct]=useState([])
         const loadData=async()=>{
            const Response =await axios.get("https://dummyjson.com/products")
            const maindata=Response.data.products
            setProduct(maindata);
            console.log(maindata)
            // useState(maindata)
         }
         useEffect(()=>{
            loadData()   
         },[])
   

  return (
    <div className='d-flex flex-row justify-content-center flex-wrap'  >
         {
            Product.map((item,index)=>{
                return(

                    <div className='m-4 ' style={{width:"207px",height:"350px"}}> 
                    <Card  className='shadow-sm border border-0' style={{position:"relative"}}>
                    <Card.Img variant="top" style={{width:"100%"}} src={item.images} />
                    <Badge style={{position:"absolute",top:"10px" ,right:"10px",color:"white"}} 
                         bg={item.label=="BEST"? "primary":"danger"} >{"data"}
                    </Badge>
                      <p className='mt-2 mb-0 mx-2 text-truncate' 
                          style={{textAlign:"Start",fontWeight:"bold"}}>{item.title}
                      </p>
                      <p  className='mx-1  trucate my-0 d-inline-block  ' style={{textAlign:"start" ,fontSize:"15px"}}>
                        {item.description}
                      </p>
                      <div style={{height:"30px"}} className='d-flex justify-content-between mt-2'>
                            <div  className='mx-3' style={{fontWeight:"bold",fontFamily:"monospace"}}> 
                              <p>{item.price}</p>
                            </div>
                            <div className='d-flex justify-content-center ms-2' >
                                   <img className='mt-1 ' style={{height:"15px"}} src={star} alt='...'/>
                                   <p className='mx-2'>{item.rating}</p>
                            </div>
                      </div>
                      <div className='align-center d-block mx-auto mb-3'> <Badge className='py-1' style={{width:"100px",cursor:"pointer"}} bg="primary">BUY</Badge></div>
                  </Card>
                  </div>
                )
            })
         }
    </div>
  )
}

export default Product
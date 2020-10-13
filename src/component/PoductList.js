import React, { Component} from "react"
import Product from "./Product";
// import {storeProducts} from "../data.js";
import  {useState, useEffect} from 'react'
import db from '../firebaseConfig'
import { Link } from "react-router-dom"



function ProductList(props) {
  const [titles, setTitles] = useState([])
   const [carImg, setCarImg] = useState([]);
  // const [carPrc, setCarPrc] = useState('');

  const fetchData = async()=>{
    // const res = await db.collection('demo').doc('header').get()
    // const data = res.data()
    // console.log(data);
    // setHeader(data.tilte)
    const usersRes = await db.collection('store').get() 
    // console.log(usersRes);
    const carTitle= usersRes.docs.map((title) => { 
    const data = title.data() 
        const id = title.id;
        return { id, ...data }})
    // console.log(carTitle);
    setTitles(carTitle)
    const carImage= usersRes.docs.map((img) => img.data())
    // console.log(carTitle);
    setCarImg(carImage)
    
  }
  useEffect(()=>{
    fetchData()
  },[])
  useEffect(()=>{
    fetchData()
  },[])
    return (
      <>
      
  <div className ="container-fluid d-flex justify-content-center">
      <div className="row">
        
            
        {titles.map(title =>{ 
          // console.log(title.id)
            return( 
              
              <Link to={`/product/${title.id}`} >
                 
              <div className="card-body text-dark">
              <h3 className="card-title">{title.title}</h3>
              </div>
               <div className="row" >
              <img className ="card-img-top"   className="col-md-4" src={title.img} ></img>
              </div>
              </Link>
               
            )
            })}
             {/* {carImg.map(carImg =>{ 
              console.log(carImg) 
            return( 
              <>
                <div className="col-md-4">
              <Link to ={`/product/${props.id}`}><img src={carImg.img} className ="card-img-top" ></img></Link>
              
              </div>  */}
              
             
              
              
              
            {/* )
            })}
            */}
        
      </div> 
      
  </div>
    </>
  )}
  export default ProductList;

 
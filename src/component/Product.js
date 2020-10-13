import React, { Component} from "react"
// import { Image } from "react-bootstrap"
import { Link } from "react-router-dom";


import  {useState, useEffect} from 'react'
import db from '../firebaseConfig'

function Product(props) {

  const [carId, setCarId] = useState([]);
  //  const [carImg, setCarImg] = useState([]);

  const fetchData = async()=>{
    const carsId = props.match.params.id
    const carsRes = await db.collection('store').doc(carsId).get()
    
     const data = carsRes.data()
     const id = data.id;
    console.log(data);
    
setCarId(data);


    
  }
  useEffect(()=>{
    fetchData()
  },[])

  
    return (
      <div>
      {props.title}
     </div>
      )
       
  }
  
  export default Product;
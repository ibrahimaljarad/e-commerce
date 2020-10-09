import React, { Component} from "react"
// import { Image } from "react-bootstrap"
import { Link } from "react-router-dom";

function Product(props) {
 
    return (
      <div>
      <Link src ={`/product/${props.id}`}/>
      </div>
      )
       
  }
  
  export default Product;
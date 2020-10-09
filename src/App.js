import React, {component} from "react";
// import React, {useState, useEffect} from 'react';

import {Switch , Route, Router} from "react-router-dom" 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/Navbar";
import Details from "./component/Details";
import Cart from "./component/Cart";
import ProductList from "./component/PoductList";
import Product from "./component/Product";
// import db from './firebaseConfig'

function App() {
  
  return (
   <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={ProductList}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path = "/product/:id" render ={(props)=> <Product {...props}/>}></Route>
      
      
    </Switch>
   </>
  );
}

export default App;

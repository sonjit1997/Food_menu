import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState} from "react";

import "./App.css";
import Card from "./component/Card";

import Navbar from "./component/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  const notify = () => toast("Wow Your food is added to your cart!");

  const handelClick = (item) => {
   if(cart.indexOf(item)!== -1){
    alert("sorry! You can get only 1 quantity at a time ")
   } 
   else{
    setCart([...cart,item])
    notify();
   }
 
    //console.log(cart)
  };





  return (
    <div className="App ">
      <nav className="fixed-top p-4">
        <div className="container-fluid">
          <Navbar cart={cart}  setCart={setCart} />
        </div>
      </nav>
      <div className="top">
        <Card handelClick={handelClick}/>
      </div>
    </div>
  );
}

export default App;

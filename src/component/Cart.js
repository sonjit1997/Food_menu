import React, { useState, useEffect } from "react";
import { ToastContainer,toast} from "react-toastify";
import "./style/Cart.css";

function Cart({ cart, setCart}) {
  const [price, setPrice] = useState(0);

  const hadelRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr)
  };

  const handelprice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.price));
    setPrice(ans)
  };

  useEffect(() => {
    handelprice();
  });

  const notify = () => {if(cart.length>=1){toast("Yahoo, your food will be ready in 10 minutes !" )}

  else{toast("Check our menu and order first!")}}

  return (
    <div>
      {cart.map((item) => (
        <div className="d-flex mt-3 " key={item.id}  id="ddd">
          <div className="img">
            <img src={item.image}
            alt={item.id} 
              height={"78rem"}
              width={"78rem"}
            />
          </div>

          <div className="title" >
            <h6> {item.name}</h6>
          </div>
          <div className="price  mt-4">
            <h6>₹{item.price}</h6>
          </div>
          <div className="remove float-right" id="delet" onClick={()=>hadelRemove(item.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              class="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </div>
        </div>
      ))}
      <hr/>
      <div className=" d-flex">
    <h5 className="total text-secondary">Total </h5>
    <h5 className="amount text-secondary">₹{price}</h5>
      </div>
      <div className="d-grid">
  <button className="btn  btn-success mt-2" onClick={notify}>
             
              Checkout
            </button>  <ToastContainer />

            
</div>
       
    </div>
  ); 
}

export default Cart;

import React, { useState } from "react";
import "./style/Menu.css";


const Menu = ({ item, handelClick }) => {
  const { id, name, image, price, rating } = item;


  return (
    <>
      <div className="col-md-3 mb-5">
        <div className="card p-0  text-center" key={id}>
          <img src={image} className="card-img-top" height="250 px" />
          <div className="card-img-overlay">
            <svg
              id="hart"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <p class="card-text mr-2 mb-0 fw-bolder" id="title2">
              <svg
                id="star"
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="yellow"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>{" "}
              {rating}
            </p>
          </div>
          <div className="card-body mt-1 p-1">
            <h5 className="card-title mb-0 " id="title">
              {name}
            </h5>
            <h5 className="card-title mb-0 mt-1 " id="title3">
              ₹{price}
            </h5>
          </div>
        </div>
        <div className="d-grid gap-2">
  <button className="btn mr-2 mb-0 " id="title4" onClick={()=>handelClick(item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-cart-plus-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
              </svg>{" "}
              Order
            </button>
</div>
       
      </div>
     
    </>
  );
};

export default Menu;

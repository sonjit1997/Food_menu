import React from 'react';
import Cart from './Cart';
import './style/Navbar.css';

function Navbar({cart,setCart}) {

  return (
    <>
<ul className="nav nav-pills nav-fill gap-2 p-1 small bg-white border rounded-5 shadow-sm" id="pillNav2" >
          <li className="nav-item" role="presentation">
            <button className="nav-link rounded-5 " id="home-tab2"  type="button"  ><h6 className='mt-1 text text-secondary'>HOME</h6></button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link rounded-5 active" id="profile-tab2"  type="button"  ><h6 className='mt-1'>MENU CARD</h6></button>
          </li>
          <li className="nav-item" role="presentation">
          <button className="nav-link rounded-5 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><h6 className='mt-1 text text-secondary' id='text'>MY ORDER</h6></button>

<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h6 className="offcanvas-title text text-secondary fw-bolder" id="offcanvasRightLabel">MY ORDER</h6>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <hr/>
  <div className="offcanvas-body" >
  <Cart cart={cart} setCart={setCart} />
  </div>
</div>
          </li>
        </ul>
    </>
  );
}

export default Navbar;

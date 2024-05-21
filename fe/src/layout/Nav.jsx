import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./Nav.scss"
function Nav() {
  return (
    <div className='navLayout'>
      <nav className='nav'>
        <div className="logo"><img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" /> COURSE</div>
        <ul className='items'>
          <li className='list'>
            <Link to="/" className='item'>Home</Link>
          </li>
          <li className='list'>
            <Link to="/wishlist"  className='item'>Wishlist</Link>
          </li>
          <li className='list'>
            <Link to="/Basket"  className='item'>Basket</Link>
          </li>
          <li className='list'>
            <Link to="/detail"  className='item'>detail</Link>
          </li>
          <li className='list'>
            <Link to="/add"  className='item'>add</Link>
          </li>
          <li className='list'>
            <Link to="/search"  className='item'>search</Link>
          </li>
       
        </ul>
        <div className="item contact"><i className="fa-solid fa-phone"></i>+43 4566 7788 2457</div>
      </nav>

    </div>
  )
}

export default Nav

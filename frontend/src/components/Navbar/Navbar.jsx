import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import Cart from '../../pages/Cart/Cart';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [ menu, setMenu ] = useState("home");
    const { getTotalCartAmount } = useContext( StoreContext );
  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="Tomato" className='logo' /> </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=> setMenu("home")} className={menu === "home" ? "active" : ""}> Home </Link>
        <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu === "menu" ? "active" : ""}> Menu </a>
        <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}> Mobile app </a>
        <a href='#footer' onClick={()=> setMenu("contact")} className={menu === "contact" ? "active" : ""}> Contact us </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
            <Link to='/cart'> <img src={assets.basket_icon} alt="basket icon" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={()=> setShowLogin(true)}> Sign up </button>
      </div>
    </div>
  )
}

export default Navbar

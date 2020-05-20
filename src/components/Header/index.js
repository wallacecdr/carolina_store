import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import logo from "../../assets/closet.png"

import { FiShoppingBag } from "react-icons/fi"
import "./styles.css"

function Header() {
  const cartSize = useSelector(state => state.cart.length)

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img className="logo-icon" src={logo} alt="Rocketshoes" />
        <span className="logo-text">Carolina Store</span>
      </Link>

      <Link to="/cart" className="header-cart">
        <div>
          <strong>Sacola</strong>
          <span>
            <strong>{cartSize}</strong> peças
         </span>
        </div>
        <FiShoppingBag size={36} color="#FFF" />
      </Link>
    </header>
  )
}

export default Header
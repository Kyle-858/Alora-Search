import React from 'react'
import './Navbar.css'
import alora_logo from '../assets/alora_logo.png'

const Navbar = () => {
  return (
    <nav>
      <ul className="nav__list">
        <div className="logo">
            <img src={alora_logo} alt="" />
        </div>
        <input placeHolder="Search..." type="text" className="search__bar"></input>
        <button className="search__btn">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </ul>
    </nav>
  )
}

export default Navbar

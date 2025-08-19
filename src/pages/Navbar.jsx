import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ onSearch }) => {

  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
    }
  }
  
  return (
    <nav>
      <ul className="nav__list">
        <form className="search__bar" onSubmit={handleSubmit}>
          <input placeholder="Search..." 
            type="text" 
            className="search__input" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}>
          </input>
          <button type="submit" className="search__btn">
              <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </ul>
    </nav>
  )
}

export default Navbar
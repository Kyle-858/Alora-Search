import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import getNews from './NewsAPI.js'

function App() {

  const [articles, setArticles] = useState([])

  const handleSearch = async (query) => {
    const results = await getNews(query)
    setArticles(results)
  }

  return (
    <>
      <Navbar onSearch={handleSearch}/>
      <Routes>
        <Route path="/" element={<Home articles={articles}/>} />
      </Routes>
    </>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = ({ articles }) => {

  const now = new Date()
  const milHours = now.getHours()
  const minutes = (now.getMinutes() < 10 ? '0' + (now.getMinutes()) : (now.getMinutes()))
  const hours = milHours % 12 || 12
  const ampm = milHours >= 12 ? 'PM' : 'AM'
  const [clock, setClock] = useState(true)
  const [date, setDate] = useState(getFormattedDate())

  //const backToTop = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
      const handleScroll = () => {
        setShow(window.scrollY > 300)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  //}

  function getFormattedDate() {
    const now = new Date()
    return now.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }



  return (
    <div className="container">
    <div className="background"></div>
      {articles.length === 0 ? (
        <>
          <div className="home__row">
            <h1 className="title">alora</h1>
            <span className="date">{date}</span>
            {clock ? <span onClick={() => setClock(false)} className="clock">{milHours} : {minutes}</span>
            : <span onClick={() => setClock(true)} className="clock">{hours} : {minutes} {ampm}</span>}
          </div>
          <div className="toolbar">
            <div className="stock__info toolbar__widget">NASDAQ +1.09%</div>
            <div className="toolbar__widget">Cloudy</div>
            <div className="add__btn toolbar__widget">
              <i className="plus__sign" class="fa-solid fa-plus"></i>
            </div>
          </div>
        </>
      ) : (
      <div className="search__results">
      {articles.map((article, idx) => (
        <a href={article.url} target="_blank">
        <div className="article" key={idx}>
          <div className="article__info">
            <p className="article__title">{article.title.slice(0, 100)}</p>
            <p className="article__date">{article.publishedAt}</p>
            <p className="article__summary">{article.description}</p>
            <p className="article__publisher">{article.source.name}</p>
          </div>
          {article.urlToImage == "null" ? "" : 
          <div className="img__wrapper">
            <img className="article__img" src={article.urlToImage} alt="" />
          </div>}
        </div>
        </a>
      ))}
      
      </div>
    )}
    <div className="totop__btn--container">
      <button style={{
              opacity: show ? 1 : 0,
              transition: "all 300ms ease"}}   
              onClick={scrollToTop}
              className="totop__btn">
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </div>
    </div>
  )
}

export default Home
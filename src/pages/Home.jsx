import React from 'react'
import './Home.css'
import { useState } from 'react'

//API Key: a9796cec7971495a861cf905f1adc8cc

const Home = () => {

  const now = new Date()
  const milHours = now.getHours()
  const minutes = (now.getMinutes() < 10 ? '0' + (now.getMinutes()) : (now.getMinutes()))
  const hours = milHours % 12 || 12
  const ampm = milHours >= 12 ? 'PM' : 'AM'
  const [clock, setClock] = useState(true)
  const [date, setDate] = useState(getFormattedDate())

  function getFormattedDate() {
    const now = new Date()
    return now.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="background">
      <div className="home__row">
        
        <h1 className="title">Alora</h1>
        <span className="date">{date}</span>
        {clock ? <span onClick={() => setClock(false)} className="clock">{milHours} : {minutes}</span>
        : <span onClick={() => setClock(true)} className="clock">{hours} : {minutes} {ampm}</span>}
      </div>
      <div className="toolbar">
        <div className="stock__info toolbar__widget">NASDAQ +1.09%</div>
        <div className="toolbar__widget">Cloudy</div>
        <div className="add__btn toolbar__widget">
          <i classNme="plus__sign" class="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import memeFace from '../memeFace.png'
import '../css/header.css'

function Header() {
  return (
    <div className="navbar">
        <div className="meme-logo">
            <img src={memeFace} alt="memeFace" className='meme-logo-img'/>
            <div className="meme-logo-text">Meme Generator</div>
        </div>
        <div className="meme-logo-right">React Course - Project 3</div>
    </div>
  )
}

export default Header
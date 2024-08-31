import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="h-[10vh] flex justify-between items-center mx-16 text-white ">
      <Link to={"/"} className="">LOGO</Link>
      <p>MINI GAMES ARENA</p>
    </div>
  )
}

export default Navbar

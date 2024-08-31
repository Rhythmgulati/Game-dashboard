import React from 'react'
import "./RedirectCard.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function RedirectCard({name,path,icon}) {
  return (
    <div className="h-[35vh] w-[90%] md:w-[35%] bg-slate-300 bg-white/5 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-sm rounded-lg border border-white/20 flex flex-col text-white items-center justify-around hover:scale-105 transition-all duration-1000">
        <div className="flex gap-5">
        <FontAwesomeIcon icon={icon} className="text-3xl" />
        <p className="text-2xl">{name}</p>
        </div>
        <Link to={`/${path}`} className="bg-slate-300 bg-white/5 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-sm rounded-lg border border-white/20 px-7 py-2 hover:bg-slate-400 ">Start</Link>
    </div>
  )
}

export default RedirectCard

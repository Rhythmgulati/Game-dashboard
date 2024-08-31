import React from 'react'
import Navbar from '../components/Navbar'
import RedirectCard from '../components/RedirectCard'

function Homepage() {

  const values = [
    {name:"QUIZ",path:"/quiz"},
    {name:"CROSSWORD",path:"/quiz"},
    {name:"QUIZ",path:"/quiz"},
    {name:"SCRAMBLE",path:"/scramble"}
]
  return (
    <div className="bg-[url('/img/5413332.jpg')] h-screen bg-center font-medium text-xl">
      <Navbar/>
      <div className="h-[84vh] my-2 flex flex-wrap justify-center gap-4 items-center p-10">
      {values.map((item)=>(
        <RedirectCard name={item.name} path={item.path} />
    )
      )}
      </div>
    </div>
  )
}

export default Homepage

import { useState } from 'react'
import Homepage from './pages/Homepage'
import { Route, Router, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Homepage/>}/>      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

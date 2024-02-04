import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav'
import Slider from './Component/Slider'
import AllMovies from './Component/AllMovies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Slider/>
      <AllMovies/>
    </>
  )
}

export default App

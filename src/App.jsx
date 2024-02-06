import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav'
import AllMovies from './Component/AllMovies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <AllMovies/>
    </>
  )
}

export default App

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Show from './Components/Show'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Show/>
     <Footer/>
    </>
  )
}

export default App

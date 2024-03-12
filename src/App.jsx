import { useState } from 'react'

import './App.css'
import { Hader } from './components/Hader'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hader />
    <Outlet />
     <Footer/>
    </>
  )
}

export default App

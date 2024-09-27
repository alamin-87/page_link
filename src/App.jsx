import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Help from './pages/Help'
import About from './pages/About'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter (createRoutesFromElements(
   <Route>
    <Route path='/' element ={<Home />}></Route>
    <Route path='/about' element ={<About />}></Route>
    <Route path='/help' element ={<Help />}></Route>
   </Route> 
  ))

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App

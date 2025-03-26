import React from 'react'
import {Route , Routes} from 'react-router'
import Home from './Components/pages/home'
import Popups from './Components/component/popup'
import Bdos from './Components/component/bdos'

function App() {

  return (
    <div className='w-screen h-screen text-white bg-[#1f2a3d]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/popup' element={<Popups/>}/>
        <Route path='/bdos' element={<Bdos/>}/>
      </Routes>
      
    </div>
  )
}

export default App

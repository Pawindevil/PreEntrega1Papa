import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
function App() {
 

  return (
    <>
     <NavBar/>
     <ItemListContainer greeting ="Hola a todos los clientes!"/>
    </>
  )
}

export default App

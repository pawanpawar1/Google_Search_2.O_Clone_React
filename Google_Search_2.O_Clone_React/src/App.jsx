import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { AppContext } from './utils/ContextApi'
import './App.css'

const App = () => {
  return (
    <>
    <AppContext>
      <RouterProvider router={router}/>
    </AppContext>
    </>
  )
}

export default App

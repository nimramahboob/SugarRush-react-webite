import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import RecipesPage from './pages/RecipesPage'
import Contact from './pages/Contact'

import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='recipes' element={<RecipesPage />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
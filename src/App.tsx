import React from 'react'
import { Header } from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
type Props = {}

export const App = (props: Props) => {
   return (
      <div className='container' >
         <Header />
         <Router>
            <Routes>
               <Route path='' element={<Home />} />
            </Routes>
         </Router>
      </div>
   )
}

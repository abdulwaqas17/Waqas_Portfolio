import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './Routes'
import Header from './Components/Header'
import Contact from './Screens/Contact'
import Footer from './Components/Footer'
// import TrackValue from './Components/Demo'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, screen }, index) => (
            <Route key={index} path={path} element={screen} />
          ))}
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={"Page Not Found"} />
        </Routes>
      {/* <TrackValue/> */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

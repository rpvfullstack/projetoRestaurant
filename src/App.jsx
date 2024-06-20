import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Price from './Components/Price'
import Team from './Components/Team'
import Footer from './Components/Footer'
import Services from './Components/Services'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/> 
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/price" element={<Price/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App

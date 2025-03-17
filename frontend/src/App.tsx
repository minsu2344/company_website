import { BrowserRouter, Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Outlet />
      <Footer />
    </BrowserRouter>
  )
}

export default App

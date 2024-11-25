import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from './layout/Layout'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"


function App() {
    return(
        <Router>
            <Routes>
                <Route element={<Layout/>}>

                    <Route path='/' element={<Home/>} />
                    <Route path='/skills' element={<Skills/>} />
                    <Route path='/portfolio' element={<Portfolio/>} />
                    <Route path='/contact' element={<Contact/>} />

                </Route>
            </Routes>
        </Router>
    )
}

export default App

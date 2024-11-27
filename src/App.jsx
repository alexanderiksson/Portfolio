import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"


function App() {
    return(
        <HelmetProvider>
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
        </HelmetProvider>
    )
}

export default App

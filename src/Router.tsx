import { Routes, Route , useLocation } from 'react-router-dom'

import { Beach } from './pages/Beach'
import { Fitness } from './pages/Fitness'
import { Home } from './pages/Home'
import { Kids } from './pages/Kids'

import { AnimatePresence } from 'framer-motion'


export function Router() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/Fitness" element={<Fitness />} />
                <Route path="/Beach" element={<Beach />} />
                <Route path="/Kids" element={<Kids />} />
            </Routes>
        </AnimatePresence>
    )
}
import { Routes, Route } from 'react-router-dom'

import { Beach } from './pages/Beach'
import { Fitness } from './pages/Fitness'
import { Home } from './pages/Home'
import { Kids } from './pages/Kids'


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Fitness" element={<Fitness />} />
            <Route path="/Beach" element={<Beach />} />
            <Route path="/Kids" element={<Kids />} />
        </Routes>
    )
}
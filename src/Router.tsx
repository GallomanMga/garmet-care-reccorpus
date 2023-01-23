import { Routes, Route } from 'react-router-dom'

import { Beach } from './pages/Beach'
import { Fitness } from './pages/Fitness'
import { Home } from './pages/Home'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Fitness" element={<Fitness />} />
            <Route path="/Beach" element={<Beach />} />
        </Routes>
    )
}
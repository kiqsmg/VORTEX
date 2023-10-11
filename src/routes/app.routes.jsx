import { Routes, Route } from 'react-router-dom';

import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Profile />} />
        </Routes>
    )
}
import { Routes, Route, Navigate } from 'react-router-dom'
import { Portfolio } from '../pages/Portfolio'

export const ReactRouter = () => {
    return (
        <Routes>
            <Route path='/portfolio' element={<Portfolio />}/>

            <Route path='*' element={<Navigate to='/portfolio' />}/>
        </Routes>
    )
}
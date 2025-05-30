import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TestNumContext from './Context/TestNumContext';
import Home from './views/Home/Home';
import Test from './views/Test/Test';

function GNB() {
    return (
        <nav>
            <Link to='/'>홈</Link>
            <span> | </span>
            <Link to='/test'>테스트</Link>
        </nav>
    );
}

function App() {
    const [globalVal, setGlobalVal] = useState(0);
    return (
        //함수도 같이 전달
        <TestNumContext.Provider value={{ globalVal, setGlobalVal }}>
            <BrowserRouter>
                <GNB />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/test' element={<Test />} />
                </Routes>
            </BrowserRouter>
        </TestNumContext.Provider>
    );
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TestNumContext from './Context/TestNumContext';
import Home from './views/Home/Home';
import Test from './views/Test/Test';
import StateTest from './views/StateTest/StateTest';
import RefTest from './views/RefTest/RefTest';
import ReactMemo from './views/ReactMemo/ReactMemo';
import CallBackTest from './views/CallBackTest/CallBackTest';

function GNB() {
    return (
        <nav>
            <Link to='/'>홈</Link>
            <span> | </span>
            <Link to='/test'>테스트</Link>
            <span> | </span>
            <Link to='/ref'>Ref</Link>
            <span> | </span>
            <Link to='/state'>State</Link>
            <span> | </span>
            <Link to='/reactmemo'>ReactMemo</Link>
            <span> | </span>
            <Link to='/callback'>Callback</Link>
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
                    <Route path='/ref' element={<RefTest />} />
                    <Route path='/state' element={<StateTest />} />
                    <Route path='/reactmemo' element={<ReactMemo />} />
                    <Route path='/callback' element={<CallBackTest />} />
                </Routes>
            </BrowserRouter>
        </TestNumContext.Provider>
    );
}

export default App;

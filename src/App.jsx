import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TestNumContext from './Context/TestNumContext';
// import Home from './views/Home/Home';
// import Test from './views/Test/Test';

function App() {
    const [testNum, setTestNum] = useState(0);
    return (
        <TestNumContext.Provider value={{ testNum, setTestNum }}>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<Home />} /> */}
                    {/* <Route path='/test' element={<Test />} /> */}
                </Routes>
            </BrowserRouter>
        </TestNumContext.Provider>
    );
}

export default App;

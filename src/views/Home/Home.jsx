import { useState, useContext } from 'react';
import TestNumContext from '../../Context/TestNumContext';

const Home = () => {
    const { globalVal, setGlobalVal } = useContext(TestNumContext);

    const handleClick = () => {
        setGlobalVal(globalVal + 1);
    };
    return (
        <>
            <div>Home</div>
            <h1>{globalVal}</h1>
            <button onClick={handleClick}>UP</button>
        </>
    );
};
export default Home;

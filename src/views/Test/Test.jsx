import { useState, useContext } from 'react';
import TestNumContext from '../../Context/TestNumContext';

const Test = () => {
    const {globalVal, setGlobalVal} = useContext(TestNumContext);

    const handleClick = () => {
        setGlobalVal(globalVal + 1);
      };
    return (
        <>
            <div>Test</div>
            <h1>{globalVal}</h1>
            <button onClick={handleClick}>UP</button>
        </>
    );
};
export default Test;

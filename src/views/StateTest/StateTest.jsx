import { useState } from 'react';

const StateTest = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return <button onClick={handleClick}>클릭: {count}</button>;
};
export default StateTest;

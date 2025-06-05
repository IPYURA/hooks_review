import { useContext } from 'react';
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
      <ul>
        <li>
          <mark>useContext</mark>
        </li>
        <li>
          <mark>useEffect</mark>
        </li>
        <li>
          <mark>useState</mark>
        </li>
        <li>
          <mark>useReducer</mark>
        </li>
        <li>
          <mark>useRef</mark>
        </li>
        {/* (값 최적화) */}
        <li>
          <mark>useMemo</mark>
        </li>
        {/* (함수 최적화) */}
        <li>
          <mark>useCallback</mark>
        </li>
      </ul>
    </>
  );
};
export default Home;

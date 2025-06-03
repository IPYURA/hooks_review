import { useState, useContext } from 'react';
import TestNumContext from '../../Context/TestNumContext';

const Test = () => {
  const { globalVal, setGlobalVal } = useContext(TestNumContext);
  const [batchState, setBatchState] = useState(0);

  const handleClick = () => {
    setGlobalVal(globalVal + 1);
  };

  //[함수형 업데이트 방식]
  const testBatch1 = () => {
    setBatchState(count => count + 1); //[1] 초기상태 0으로 가정, 0 -> 1 로 증가
    setBatchState(count => count + 1); //[2] [1]과정에서 업데이트 된 값(1)을 반영하여 1을 증가(1 -> 2)
    console.log('batchState: ', batchState); // 0  출력됨 (리액트의 상태 업데이트는 비동기적으로 수행되므로)
  };

  //[직접 값을 업데이트하는 방식]
  const testBatch2 = () => {
    // React가 두 번의 상태 업데이트 요청을 한 번에 모아서 처리하므로, count는 1만 증가하게 된다.
    setBatchState(batchState + 1); //[1] 초기상태 0으로 가정, 0 → 1 (예약)
    setBatchState(batchState + 1); //[2] 0 → 1 (예약). [1]과 같은 동작을 수행함 (React가 아직 업데이트를 적용하지 않았으므로)
    // React는 두 업데이트를 동일한 값으로 덮어쓰기 때문에 최종적으로 batchState는 1 증가
    console.log('batchState: ', batchState); // 0  출력됨 (리액트의 상태 업데이트는 비동기적으로 수행되므로) 업데이트된 값을 console.log로 확인하려면 useEffect 사용한다.
  };
  return (
    <>
      <div>Test</div>
      <h1>{globalVal}</h1>
      <button onClick={handleClick}>UP</button>

      <div>
        <h2>React의 batch 눈으로 확인하기</h2>
        <button onClick={testBatch1}>[함수형 업데이트 방식]</button>
        <button onClick={testBatch2}>[직접 값을 업데이트하는 방식]</button>
        <strong>{batchState}</strong>
      </div>
    </>
  );
};
export default Test;

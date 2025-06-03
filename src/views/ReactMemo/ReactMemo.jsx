import { useState } from 'react';
import MemoChild from './MemoChild';

const ReactMemo = () => {
  const [parentState, setParentState] = useState(0);

  return (
    <div>
      <h2>React.Memo Parent Component</h2>
      <span>now parentState: </span>
      <strong>{parentState}</strong>
      <button onClick={() => setParentState(state => state + 1)}> ParnetState++ </button>
      <div>
        <MemoChild />
      </div>
    </div>
  );
};

export default ReactMemo;

import { memo } from 'react';
const MemoChild = () => {
  console.log('MemoChild Rendered!');
  return (
    <div>
      <h3>Memo Child Component</h3>
    </div>
  );
};

export default memo(MemoChild);

/*

React.memo 는 컴포넌트를 메모이제이션(캐싱)한다.
React.memo 는 기본적으로 props가 없으면 리렌더링을 막는다.

MemoChild 컴포넌트에서 memo를 사용하지 않았다면, 부모컴포넌트(ReactMemo.jsx)에서 카운트를 증가시킬 때 

MemoChild 컴포넌트도 같이 리렌더링되었을 것이다.
React에서는 부모 컴포넌트가 리렌더링되면, props가 바뀌지 않았더라도(심지어 props를 주지 않은 상태에서도) 자식 컴포넌트도 기본적으로 리렌더링이 일어난다.

"불필요한 자식 컴포넌트의 리렌더링을 방지하고자 React.memo를 사용한다."

*/

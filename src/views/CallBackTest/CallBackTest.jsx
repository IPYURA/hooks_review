import React from 'react'

const CallBackTest = () => {
  return (
    <div>
      
    </div>
  )
}

export default CallBackTest

/*
useCallBack은 함수를 메모이제이션(기억)해서, 의존성 배열에 있는 값이 변하지 않는 한 같은 함수를 계속 반환한다.

const increment = useCallback(() => {
  setCount(count + 1);
}, [count]);

의존성 배열 안에 포함된 "count"가 변할 때마다 새 함수를 생성한다.

setCount는 단순히 count 변수를 1증가시키는 것 밖에 없는데, 왜 굳이 함수를 새로 만들어야 할까?
=> 클로저(Closure) 의 작동 원리 때문이다.

함수는 "클로저" 다.
함수가 선언될 때, 자신이 생성된 환경(스코프)의 변수를 기억한다.
즉 increment 함수는 생성되었을 때의 count값을 기억한다는 뜻이다.

count 값이 0에서 1로 증가했다고 가정하자.
count 값이 바뀌었음에도 increment 함수를 새로 생성해주지 않으면, increment 함수는 count값을 0이라고 기억하고 있으며 count변수를 0에서 1로 증가시키는 같은 동작을 수행하게 된다.
즉, 함수를 새로 생성하지 않으면 이전 값을 그대로 참조한다.
따라서 count 변수의 값이 바뀌면 increment 함수도 재생성되어야 카운트업의 기능을 정상수행할 수 있게 된다.

의존성 배열 없이도 항상 최신 값을 참조하려면 함수형 업데이트를 사용하면 된다. 아래와 같다.

const increment = useCallback(() => {
  setCount((prevCount) => prevCount + 1); // ⭐️ prevCount: 최신 값
}, []); // 의존성 배열이 빈 배열이어도 최신 값을 참조한다.


*/
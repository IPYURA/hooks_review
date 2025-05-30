import { useRef } from 'react';

const RefTest = () => {
    const countRef = useRef(0);

    const handleClick = () => {
        countRef.current += 1;
        console.log('클릭 횟수:', countRef.current);
    };

    return <button onClick={handleClick}>클릭: {countRef.current}</button>;
};
export default RefTest;

//DOM에 직접 접근이 필요할 때

// 예를 들어, 입력이 끝난 후에 한 번만 값을 읽고 싶거나,
// 입력이 끝나면 자동으로 포커스를 이동시키거나,
// 입력값을 초기화하거나,
// 특정 UI 조작(예: 텍스트 선택, 미디어 재생 등)이 필요할 때 사용합니다.

// 성능 최적화

// 입력 값을 매번 state로 관리하면, 입력마다 리렌더링이 발생합니다.
// 그러나 ref를 사용하면 입력이 끝난 후에만 값을 읽을 수 있으므로,
// 불필요한 리렌더링을 줄일 수 있습니다.

// 외부 라이브러리와의 연동

// 서드파티 라이브러리(차트, 에디터 등)와 연동할 때 DOM 요소에 직접 접근해야 할 경우에 사용합니다.

// 제어되지 않는(Uncontrolled) 컴포넌트

// 입력값을 React의 state로 관리하지 않고,
// 네이티브 DOM의 value 속성에만 의존하는 경우에 ref를 씁니다.
// 이 방식은 간단한 폼이나, 입력값을 한 번만 읽으면 되는 경우에 유리합니다


// ref 사용이 적합한 예시
// 입력 후 한 번만 값 읽기

// 예: 폼 제출 시 input의 값을 가져올 때

// 입력 필드에 포커스 주기

// 예: 버튼 클릭 시 input에 자동으로 포커스 이동

// 입력값 초기화

// 예: 리셋 버튼 클릭 시 input value를 빈 문자열로 만들기

// UI 조작

// 예: 텍스트 선택, 미디어 재생, 스크롤 위치 조정 등
import { useState } from 'react';
import './Confirm.css';

const Confirm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickModalClose = () => {
    console.log('modal closed');
    setIsOpen(isOpen => (isOpen = false));
  };
  return (
    <div className="modal-bg">
      <div className="modal-content">
        <button onClick={onClickModalClose} className="modal-exit">
          X
        </button>
        <p className="modal-text">여기에 내용이 들어갑니다.여기에 내용이 들어갑니다.여기에 내용이 들어갑니다.</p>
        <div className="modal-button-wrap">
          <button>확인</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;

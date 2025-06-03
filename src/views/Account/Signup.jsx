import { useRef } from 'react';
import './account.css';

const Signup = () => {
  const refID = useRef('');
  const refPW = useRef('');
  const refPW2 = useRef('');
  const onClickSignUp = () => {
    //
  };
  return (
    <div className="login-wrap">
      <h1>SignUp</h1>
      <label htmlFor="userID">ID</label>
      <input ref={refID} type="text" id="userID" className="account-input" />
      <label htmlFor="pw">PW</label>
      <input ref={refPW} type="password" id="pw" className="account-input" />
      <label htmlFor="pw2">PW Check</label>
      <input ref={refPW2} type="password" id="pw2" className="account-input" />
      <div className="button-wrap">
        <button onClick={onClickSignUp} className="form-button">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Signup;

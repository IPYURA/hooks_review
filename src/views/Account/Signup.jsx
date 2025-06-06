import { useState, useRef } from 'react';
import './account.css';
import { supabase } from '@/api/supabase';

const Signup = () => {
  const refID = useRef(null);
  const refPW = useRef(null);
  const refPW2 = useRef(null);

  const handleSignup = async () => {
    if (!checkSamePassword()) return;

    alert('회원가입로직');
    // const { error } = await supabase.auth.signUp({
    //   email,
    //   password,
    //   // options: { data: { ... } } // 프로필 정보 등 추가 가능
    // });
    // if (error) {
    //   console.error(error);
    // } else {
    //   // 성공 처리
    // }
  };

  const checkSamePassword = () => {
    console.log('checkSamePassword: ', refPW.current.value, refPW2.current.value);
    alert('Incorrect Password');
    return refPW.current.value === refPW2.current.value;
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
        <button onClick={handleSignup} className="form-button">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Signup;

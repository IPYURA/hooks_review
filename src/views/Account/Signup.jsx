import {useRef} from "react"
const Signup = () => {
    const refID = useRef("");
    const refPW = useRef("");
    const refPW2 = useRef("");
    const onClickSignUp = () => {
        //
    }
    <div className="login-wrap">
        <label htmlFor="userID">ID</label>
        <input type="text" id="userID" className="account-input"/>
        <label htmlFor="pw">PW</label>
        <input type="password" id="pw" className="account-input"/>
        <label htmlFor="pw2">PW Check</label>
        <input type="password" id="pw2" className="account-input"/>
        <div className="button-wrap">
            <button onClick="onClickSignUp">Sign Up</button>
        </div>
    </div>
}
export default Signup;
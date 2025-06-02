import "./account.css"
import { useRef } from "react"
const Login = () => {
    const refUserID = useRef("");
    const refPW = useRef("");
    const onClickLogin =()=>{
        //
    }
    <div className="login-wrap">
        <label htmlFor="userid" className="input-label">ID</label>
        <input ref="refUserID" type="text" id="userid" className="account-input"/>
        <label htmlFor="pw" className="input-label">PW</label>
        <input ref="refPW" type="password" name="password" id="pw" className="account-input"/>
        <div>
            <button onClick="onClickLogin" className="form-button">LOGIN</button>
        </div>
    </div>
}
export default Login;
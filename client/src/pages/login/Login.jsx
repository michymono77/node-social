import "./login.css"
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import { CircularProgress } from '@mui/material';


export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, dispatch} = useContext(AuthContext);

  const handleClick =(e)=>{
    e.preventDefault();
    console.log("clicked");
    loginCall({ email: email.current.value, password: password.current.value }, dispatch )
  }
  console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MichiSocial</h3>
          <span className="loginDesc">
            Connect with the world and the frineds around you on MichiSocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input required placeholder="Email" type="email" className="loginInput" ref={email} />
            <input required placeholder="Password" type="password" className="loginInput" ref={password} minLength="6" />
            <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? "loading" :"login"}</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              {isFetching ? "loading" : "Create New Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

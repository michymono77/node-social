import "./register.css"
import { useRef } from "react";
import axios from "axios";
import { useNavigate} from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordConfirmation.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch(err) {
        console.log(err)
      }
    }

  }

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
            <input required placeholder="Username" className="loginInput" ref={username} />
            <input type="email" required placeholder="Email" className="loginInput" ref={email} />
            <input type="password" required placeholder="Password" className="loginInput" ref={password} minLength="6"/>
            <input type="password" required placeholder="Password Confirmation" className="loginInput" ref={passwordConfirmation} />
            <button className="loginButton" type="submit">Sign up</button>
            <button className="loginRegisterButton">Go to Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

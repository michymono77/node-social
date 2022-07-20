import "./register.css"

export default function Register() {
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
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput"/>
            <input placeholder="Password Confirmation" className="loginInput" />
            <button className="loginButton">Signup</button>
            <button className="loginRegisterButton">Go to Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

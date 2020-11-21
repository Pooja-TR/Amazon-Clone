import React from "react";
import "./Login.css";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useStateValue("");
  const [password, setPassword] = useStateValue("");

  const signIn = (e) => {
    e.preventDefault();
    //Some fancy firebase thing happens here
  };
  const register = (e) => {
    e.preventDefault();
    //Some fancy firebase thing happens here
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's FAKE CLONE Conditions of Use and
          Privacy Notice.
        </p>

        <button
          className="login__registerButton"
          onClick={register}
          type="submit"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

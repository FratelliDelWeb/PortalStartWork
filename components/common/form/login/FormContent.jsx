import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import { useState } from "react";

const FormContent = () => {

  let initialState = {
    username: "",
    password: "",
    stato: false,
  }
  const [state, setState] = useState(initialState);

  const handleSubmit = function (e) {
    e.preventDefault();
    const username = state.username;
    const password = state.password;
    console.log(username, password);
    fetch("/api/auth/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.message === "User successfully Logged in") {
          alert("login successful");
          window.localStorage.setItem("token", data.user);
        }
        if (data.role !== "admin") {
          fetch("/basic").then((response) => {
            response.json();
            const staus = response.status;
            console.log(response);
            console.log(staus);
            if (staus === 200 || staus === 201) {
              window.location.href = "/dashboard";
            } else {
              alert("Nome o password errati");
            }
          });
        } else {
          fetch("/admin").then((response) => {
            response.json();
            const staus = response.status;
            console.log(response);
            console.log(staus);
            if (staus === 200 || staus === 201) {
              window.location.href = "/dashboard";
            } else {
              alert("Nome o password errati");
            }
          });
        }
      });
  }

  return (
    <div className="form-inner">
      <h3>Login to Superio</h3>

      {/* <!--Login Form--> */}
      <form  onSubmit={(e) => {
       handleSubmit(e);
      }} action="/api/auth/login" method="post">
        <div className="form-group">
          <label>Username</label>
          <input onChange={(e) => setState({ ...state,username: e.target.value })} type="text" name="username" placeholder="Username" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input onChange={(e) => setState({ ...state,password: e.target.value })} type="password" name="password" placeholder="Password" required/>
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          
          >
            Log In
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-dismiss="modal"
            data-bs-target="#registerModal"
            data-bs-toggle="modal"
          >
            Signup
          </Link>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
    
  );
  
};

export default FormContent;

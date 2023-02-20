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
          window.sessionStorage.setItem("token", data.user);
          if(data.role === "admin"){
            window.location.href = "/area-privata/dashboard";
          }else if (data.role === "Basic"){
            window.location.href = "/area-privata-candidates/dashboard";
          }
      

        } else {
          alert("Nome o password errati");
        }
      });
  }

  return (
    <div className="form-inner">
      
   
            <div className="logo">
              <Link href="/">
                <img src="/images/logo.svg"  width="120px" alt="brand" />
              </Link>
            </div>
            <h3>Accedi alla tua area privata</h3>
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
                <span className="custom-checkbox"></span> Ricordati di me
              </label>
            </div>
            <a href="#" className="pwd">
            Hai dimenticato la password?
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
            ACCEDI
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Non hai un account?Invia la tua candidatura.
          <Link
            href="#"
            className="call-modal signup"
            data-bs-dismiss="modal"
            data-bs-target="#registerModal"
            data-bs-toggle="modal"
          >
           Invia candidatura
          </Link>
        </div>

       {/*  <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial /> */}
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
    
  );
  
};

export default FormContent;

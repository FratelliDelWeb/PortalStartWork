import Link from "next/link";
import { useState } from "react";
import Loader from "../../../loader/Loader";
import { useSession, signIn } from "next-auth/react";

const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

const FormContent = () => {
  const { data: session, status } = useSession()
  let initialState = {
    username: "",
    password: "",
    stato: false,
  };

  const [state, setState] = useState(initialState);

  const [passwordType, setPasswordType] = useState("password");
  const [okLogin, setokLogin] = useState();
  const [error, setError] = useState({
    username: ``,
    password: ``,
    login: ``,
  });
  const validateInput = (e) => {
    console.log(e.target);

    let { name, value } = e.target;
    console.log(name);
    console.log(value);
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj["username"] = "Per favore inserire il nome.";
          }
          break;

        case "password":
          if (!value) {
            stateObj["password"] = "Per favore  la password.";
          }

        case "log-in":
          if (!value) {
            stateObj["log-in"] = "Per favore  la password.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };


  
  const checkRole = (session) => {
 if(session){
  const userRole =   session.user.role;
  const id = session.user.user;
  /* const idSet = localStorage.setItem('token'. id); */
  console.log("IDUSERRRRRRRRRRRRRRRRRRRRRRRR" , id);
  if(userRole=== "admin" || userRole=== "Basic"){
    window.location.replace("/area-privata/dashboard");
  }  window.location.replace("/area-privata-candidates/dashboard");
 }
   

  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    const username = state.username;
    const password = state.password;
    console.log(username, password);
    await signIn("login", {
      username,
      password,
      redirect: false,
    }).then(({ ok, error }) => {
      if (ok) {
       
      } else {
        console.log(error);
      }
    });
    console.log(session)
    checkRole(session);
  };

  return (
    <div className="form-inner">
      <div className="logo">
        <Link href="/">
          <img src="/images/logo.svg" width="120px" alt="brand" />
        </Link>
      </div>
      <h3>Accedi alla tua area privata</h3>
      {/* <!--Login Form--> */}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="form-group">
          <label>Username</label>
          <input
            onBlur={(e) => validateInput(e)}
            onChange={(e) => setState({ ...state, username: e.target.value })}
            className={error.username ? "errorInput" : ""}
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          {error.username && <span className="err">{error.username}</span>}
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input
            onBlur={(e) => validateInput(e)}
            onChange={(e) => setState({ ...state, password: e.target.value })}
            className={error.password ? "errorInput" : ""}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {error.password && <span className="err">{error.password}</span>}
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
          {error.login && <span className="err">{error.login}</span>}
        </div>
        <div className="form-group">
          <button
            className={!okLogin ? "heme-btn btn-style-one " : "d-none"}
            type="submit"
            name="log-in"
            onBlur={(e) => validateInput(e)}
          >
            ACCEDI
          </button>
          {okLogin && <Loader></Loader>}
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

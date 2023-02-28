import { useState } from "react";
import InputRange from "react-input-range";
import { createCandidate } from "../../../../services/public/createCandidate";
import axios from "axios";
import { useRouter } from "next/router";
import Loader from "../../../loader/Loader";
import Experience from "./Experience";

const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
const FormContent = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setnewUserSend("send");
    router.push(`/#`);
    axios
      .post(api + "/public/candidates/create", newUser)
      .then((res) => {
        console.log("res", res.data);
        setnewUserSend("ok");
      })
      .catch((err) => {
        console.log(err);
        setnewUserSend("error");
        console.log("error in request", err.response.data);
        let errorTextMessage = err.response.data.message;
        let errorTextError = err.response.data?.error;

        console.log("errore", errorTextMessage);
        if (!errorTextError) {
          setErrorSend(errorTextMessage);
        } else setErrorSend(errorTextMessage + errorTextError);
      });
  };
  const [newUserSend, setnewUserSend] = useState();
  const [getDestination, setDestination] = useState({
    min: 0,
    max: 100,
  });

  const handleOnChange = (value) => {
    setDestination(value);
    setnewUser({ ...newUser, rangeWithin: value.max });
  };

  const [newUser, setnewUser] = useState({
    name: `Roberto`,
    surname: `Afragolese`,
    phone: `+393923784332`,
    age: `19`,
    rangeWithin: 50,
    gender: `Male`,
    location: {
      city: "",
      lng: "",
      lat: "",
    },
    credentials: {
      username: "JustToTry_02",
      password: "JustToTry",
      email: "consfedes_justtotry@gmail.com",
    },
    esperienze: [
      {
        titolo: "",
        startTo: "",
        finishTo: "",
        luogo: "",
        desc: "",
      },
    ],
    mansione: "Tuttoqualsiasi",
  });

  const [error, setError] = useState({
    name: ``,
    surname: ``,
    phone: ``,
    age: ``,
    rangeWithin: ``,
    gender: ``,
    password: ``,
    confirmPassword: ``,
    location: ``,
  });
  const [errorSend, setErrorSend] = useState("errore");
  const [passwordType, setPasswordType] = useState("password");

  const setEsperienzeToSend = (esperienze) => {
    setnewUser({ ...newUser, esperienze: esperienze });
    console.log(newUser.esperienze);
  };
  const validateInput = (e) => {
    console.log(newUser);
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "name":
          if (!value) {
            stateObj[name] = "Per favore inserire il nome.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <form
      method="POST"
      className="p-3"
      onSubmit={(e) => handleSubmit(e, newUser)}
    >
      {newUserSend !== "ok" ? (
        <div>
          {newUserSend === "send" && newUserSend !== "ok" ? (
            <Loader></Loader>
          ) : (
            <div className="row">
              <div className="error">
                {errorSend ? (
                  <div>
                    <h6>{errorSend}</h6>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="row mt-20">
                <div className="col-6 mt-20">
                  <div className="form-group">
                    <label>Nome</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nome"
                      id="name-field"
                      className={error.name ? "errorInput" : ""}
                      value={newUser.name}
                      onBlur={(e) => validateInput(e)}
                      onChange={(e) =>
                        setnewUser({ ...newUser, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  {error.name && <span className="err">{error.name}</span>}
                </div>

                <div className="col-6 mt-20">
                  <div className="form-group">
                    <label>Cognome</label>
                    <input
                      id="cognome-field"
                      className={error.surname ? "errorInput" : ""}
                      type="text"
                      name="cognome"
                      value={newUser.surname}
                      placeholder="Cognome"
                      onBlur={(e) => validateInput(e)}
                      onChange={(e) =>
                        setnewUser({ ...newUser, surname: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="col-6 mt-20">
                  <div className="form-group">
                    <label>Telefono</label>
                    <input
                      id="phone-field"
                      className={error.phone ? "errorInput" : ""}
                      type="text"
                      name="phone"
                      placeholder="Telefono"
                      value={newUser.phone}
                      onBlur={(e) => validateInput(e)}
                      onChange={(e) =>
                        setnewUser({ ...newUser, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="col-6 mt-20">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      id="email-field"
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={error.email ? "errorInput" : ""}
                      value={newUser.email}
                      onBlur={(e) => validateInput(e)}
                      onChange={(e) =>
                        setnewUser((newUser) => ({
                          ...newUser,
                          credentials: {
                            ...newUser.credentials,
                            email: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="col-6 mt-20">
                  <div className="form-group">
                    <label>Età</label>
                    <input
                      type="number"
                      name="age"
                      placeholder="Età"
                      id="age-field"
                      className={error.age ? "errorInput" : ""}
                      onBlur={(e) => validateInput(e)}
                      value={newUser.age}
                      onChange={(e) =>
                        setnewUser({ ...newUser, age: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-6 mt-20">
                  <div className="form-group">
                    <label>Sesso</label>
                    <select
                      onBlur={(e) => validateInput(e)}
                      value={newUser.gender}
                      className={
                        error.gender
                          ? "errorInput chosen-single form-select"
                          : "chosen-single form-select"
                      }
                      onChange={(e) =>
                        setnewUser({ ...newUser, gender: e.target.value })
                      }
                      required
                    >
                      <option>M</option>
                      <option>F</option>
                      <option>Preferisco non rispondere</option>
                    </select>
                  </div>
                </div>

                <div className="col-12 mt-20">
                  <div className="form-group">
                    <label>Mansione</label>
                    <input
                      value={newUser.mansione}
                      onBlur={(e) => validateInput(e)}
                      className={error.mansione ? "errorInput" : ""}
                      onChange={(e) =>
                        setnewUser({ ...newUser, mansione: e.target.value })
                      }
                      id="Mansione-field"
                      type="text"
                      name="mansione"
                      placeholder="Mansione"
                    />
                  </div>
                </div>
              </div>
              <div class="row mt-20">
                <Experience
                  setEsperienzeToSend={setEsperienzeToSend}
                  esperienzeList={newUser.esperienze}
                ></Experience>
              </div>
              <div className="row mt-20">
                <div className="col-6">
                  <div className="form-group">
                    <label>Città</label>
                    <input
                      value={newUser.location.city}
                      onBlur={(e) => validateInput(e)}
                      className={error.location ? "errorInput" : ""}
                      onChange={(e) =>
                        setnewUser((newUser) => ({
                          ...newUser,
                          location: {
                            ...newUser.location,
                            city: e.target.value,
                          },
                        }))
                      }
                      id="location-field"
                      type="text"
                      name="cittaà"
                      placeholder="Città"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Disponibile a soistarsi entro</label>
                    <InputRange
                      formatLabel={(value) => ``}
                      minValue={0}
                      maxValue={100}
                      value={getDestination}
                      className={error.getDestination ? "errorInput" : ""}
                      onBlur={(e) => validateInput(e)}
                      onChange={(value) => handleOnChange(value)}
                    />
                  </div>
                  <div className="input-outer">
                    <div className="amount-outer">
                      <span className="area-amount">{getDestination.max}</span>
                      km
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-20">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    id="username-field"
                    className={error.username ? "errorInput" : ""}
                    type="text"
                    name="username"
                    value={newUser.username}
                    placeholder="Username"
                    onBlur={(e) => validateInput(e)}
                    onChange={(e) =>
                      setnewUser((newUser) => ({
                        ...newUser,
                        credentials: {
                          ...newUser.credentials,
                          username: e.target.value,
                        },
                      }))
                    }
                    required
                  />
                </div>
              </div>
              <div className="col-6 mt-20">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type={passwordType}
                    name="password"
                    className={error.password ? "errorInput" : ""}
                    placeholder="Password"
                    required
                    onChange={(e) =>
                      setnewUser((newUser) => ({
                        ...newUser,
                        credentials: {
                          ...newUser.credentials,
                          password: e.target.value,
                        },
                      }))
                    }
                    onBlur={(e) => validateInput(e)}
                  />
                  <span className="p-viewer2" onClick={togglePassword}>
                    {passwordType === "password" ? (
                      <i className="fa fa-eye"></i>
                    ) : (
                      <i className="fa fa-eye-slash"></i>
                    )}
                  </span>
                </div>

                {error.password && (
                  <span className="err">{error.password}</span>
                )}
              </div>

              <div className="col-6 mt-20">
                <div className="form-group">
                  <label>Conferma passsword</label>
                  <input
                    id="sesso-field"
                    type={passwordType}
                    name="confirmPassword"
                    placeholder="Conferma passsword"
                    onBlur={validateInput}
                    className={error.confirmPassword ? "errorInput" : ""}
                    onChange={(e) =>
                      setnewUser({
                        ...newUser,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                {error.confirmPassword && (
                  <span className="err">{error.confirmPassword}</span>
                )}
              </div>
            </div>
          )}

          {newUserSend === "send" && newUserSend !== "ok" ? (
            <h3> Stiamo inoltrando la tua candidatura</h3>
          ) : (
            <div className="row mt-50">
              <div className="form-group">
                <button className="theme-btn btn-style-one" type="submit">
                  INVIA CANDIDATURA
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {newUserSend !== "send" ? (
            <h3> CANDIDATURA INVIATA CON SUCCESSO</h3>
          ) : (
            <h3> </h3>
          )}
        </div>
      )}

      {/* login */}
    </form>
  );
};

export default FormContent;

import Select from "react-select";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import InputRange from "react-input-range";
import Education from "./Education";
import AwardsCertificates from "./AwardsCertificates";
const api = process.env.API_ENDPOINT;
const FormInfoBox = (props) => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setnewUserSend("send");

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
      lag: "",
    },
    credentials: {
      username: "JustToTry_02",
      password: "JustToTry",
      email: "consfedes_justtotry@gmail.com",
    },
    mansione: "Tuttoqualsiasi",
    educazione: [
      {
        titoloStudio: "Elemntarea",
        startTo: "1991",
        finishTo: "2022",
        luogo: "G.Marconi Afragola Napoli",
        desc: "Scuola di materna di second grado obbligatoria",
      },
      {
        titoloStudio: "Licenza scuola Uperiore",
        startTo: "2021",
        finishTo: "2022",
        luogo: "N.Stefanelli SessaArunca CE",
        desc: "Scuola di terzo grado obbligatoria",
      },
    ],
    premi: [
      {
        titolo: "Elemntarea",
        data: "1991",
        luogo: "G.Marconi Afragola Napoli",
        desc: "Scuola di materna di second grado obbligatoria",
      },
      {
        titolo: "Elemntarea",
        data: "1991",
        luogo: "G.Marconi Afragola Napoli",
        desc: "Scuola di materna di second grado obbligatoria",
      },
    ],
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

  const setEducazioneToSend = (educazione) => {
    setnewUser({ ...newUser, educazione: educazione });
    console.log(newUser);
  };
  const setPremiCertificatiToSend = (premi) => {
    setnewUser({ ...newUser, premi: premi });
    console.log(newUser);
  };

  const setEducazioneToSend = (educazione) => {
    setnewUser({ ...newUser, educazione: educazione });
    console.log(newUser.educazione);
  };
  const setPremiCertificatiToSend = (premi) => {
    setnewUser({ ...newUser, premi: premi });
    console.log(newUser.premi);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
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
  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    <form
      method="POST"
      onSubmit={(e) => handleSubmit(e, newUser)}
      className="default-form"
    >
      <div className="row">
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
              onChange={(e) => setnewUser({ ...newUser, name: e.target.value })}
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
              onChange={(e) => setnewUser({ ...newUser, age: e.target.value })}
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

          {error.password && <span className="err">{error.password}</span>}
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
        <div className="form-group col-lg-12 col-md-12">
          <label>Note</label>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div>

        <Education
          setEducazioneToSend={setEducazioneToSend}
          educazioneList={newUser.educazione}
        ></Education>
        <AwardsCertificates
          setPremiCertificatiToSend={setPremiCertificatiToSend}
          educazioneList={newUser.premi}
        ></AwardsCertificates>

        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;

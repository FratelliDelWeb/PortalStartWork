import { useState } from "react";
import InputRange from "react-input-range";
import { createCandidate } from "../../../../services/public/createCandidate";
const FormContent = () => {
  const handleSubmit = async () => {
    newUser.location = {
      city: newUser.location,
    };
    delete newUser.confirmPassword;
    const data = await createCandidate(newUser);
    console.log(data);
  };

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
    confirmPassword: ``,
    location: `Napoli, NA`,
    credentials: {
      username: "JustToTry_00",
      password: "JustToTry",
      email: "consfedes_justtotry@gmail.com",
    },
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

  const [passwordType, setPasswordType] = useState("password");

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
    <form method="POST" class="p-3" onSubmit={() => handleSubmit(newUser)}>
      <div class="row">
        <div class="row mt-20">
          <div class="col-6 mt-20">
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

          <div class="col-6 mt-20">
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
          <div class="col-6 mt-20">
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
          <div class="col-6 mt-20">
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
                  setnewUser({ ...newUser, email: e.target.value })
                }
              />
            </div>
          </div>

          <div class="col-6 mt-20">
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

          <div class="col-6 mt-20">
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

          <div class="col-12 mt-20">
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
          <div class="col-6">
            <div className="form-group">
              <label>Città</label>
              <input
                value={newUser.location}
                onBlur={(e) => validateInput(e)}
                className={error.location ? "errorInput" : ""}
                onChange={(e) =>
                  setnewUser({ ...newUser, location: e.target.value })
                }
                id="location-field"
                type="text"
                name="cittaà"
                placeholder="Città"
              />
            </div>
          </div>
          <div class="col-6">
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
        <div class="col-12 mt-20">
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
                setnewUser({ ...newUser, username: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div class="col-6 mt-20">
          <div className="form-group">
            <label>Password</label>
            <input
              type={passwordType}
              name="password"
              className={error.password ? "errorInput" : ""}
              placeholder="Password"
              required
              onChange={(e) =>
                setnewUser({ ...newUser, password: e.target.value })
              }
              onBlur={(e) => validateInput(e)}
            />
            <span class="p-viewer2" onClick={togglePassword}>
              {passwordType === "password" ? (
                <i className="fa fa-eye"></i>
              ) : (
                <i className="fa fa-eye-slash"></i>
              )}
            </span>
          </div>

          {error.password && <span className="err">{error.password}</span>}
        </div>

        <div class="col-6 mt-20">
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
                setnewUser({ ...newUser, confirmPassword: e.target.value })
              }
              required
            />
          </div>
          {error.confirmPassword && (
            <span className="err">{error.confirmPassword}</span>
          )}
        </div>
      </div>

      <div class="row mt-50">
        <div className="form-group">
          <button className="theme-btn btn-style-one" type="submit">
            INVIA CANDIDATURA
          </button>
        </div>
      </div>

      {/* login */}
    </form>
  );
};

export default FormContent;

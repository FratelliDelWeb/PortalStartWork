import Select from "react-select";
import { useState, useEffect } from "react";
import InputRange from "react-input-range";
import AwardsCertificates from "./AwardsCertificates";
import Loader from "../../../../../loader/Loader";
import { modifyCandidates } from "../../../../../../services/private/modifyCandidates";
import Education from "./Education";
import { StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api";
import Experience from "./Experience";
const map_key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const FormInfoBox = ({
  candidate,
  candidateEdit,
  setCandidateView,
  setCandidate,
}) => {
  const libraries = ["places"];

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: map_key, // ,
    libraries: libraries,
  });

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

  const lingue = [
    { value: "Italiano", label: "Italiano" },
    { value: "Inglese", label: "Inglese" },
    { value: "Spagnolo", label: "Spagnolo" },
    { value: "Tedesco", label: "Tedesco" },
    { value: "Cinese", label: "Cinese" },
  ];

  const skills = [
    { value: "Programmazione", label: "Programmazione" },
    { value: "Web", label: "Web" },
    { value: "Medicina", label: "Medicina" },
    { value: "Soport", label: "Sport" },
    { value: "Musica", label: "Musica" },
    { value: "Scrittura", label: "Scrittura" },
    { value: "Probelm Solving", label: "Probelm Solving" },
  ];

  const [state, setState] = useState("start");
  const [searchBox, setSearchBox] = useState(null);
  const [getDestination, setDestination] = useState({ min: 0, max: 100 });

  const handleOnChange = (value) => {
    setDestination(value);
    setCandidateView({ ...candidateEdit, rangeWithin: value.max });
  };

  const setEditData = () => {
    console.log("Candidate => ", candidate);
    console.log("CandidateView => ", candidateEdit);
    let editData = {
      id: candidate?._id,
      fields: [
        {
          name: "surname",
          from: candidate?.surname,
          to: candidateEdit?.surname,
        },

        {
          name: "name",
          from: candidate?.name,
          to: candidateEdit?.name,
        },
        {
          name: "mansione",
          from: candidate?.mansione,
          to: candidateEdit?.mansione,
        },
        {
          name: "note",
          from: candidate?.note,
          to: candidateEdit?.note,
        },
        {
          name: "phone",
          from: candidate?.phone,
          to: candidateEdit?.phone,
        },
        {
          name: "age",
          from: candidate?.age,
          to: candidateEdit?.age,
        },
        {
          name: "gender",
          from: candidate?.gender,
          to: candidateEdit?.gender,
        },
        {
          name: "category",
          from: candidate?.category,
          to: candidateEdit?.category,
        },
        {
          name: "skills",
          from: candidate?.skills,
          to: candidateEdit?.skills,
        },
        {
          name: "status",
          from: candidate?.status,
          to: candidateEdit?.status,
        },
        {
          name: "rangeWithin",
          from: candidate?.rangeWithin,
          to: candidateEdit?.rangeWithin,
        },
        {
          name: "languages",
          from: candidate?.languages,
          to: candidateEdit?.languages,
        },
        {
          name: "esperienze",
          from: candidate?.esperienze,
          to: candidateEdit?.esperienze,
        },
        {
          name: "location",
          from: candidate?.location,
          to: candidateEdit?.location,
        },
        {
          name: "educazione",
          from: candidate?.educazione,
          to: candidateEdit?.educazione,
        },
        {
          name: "premi",
          from: candidate?.premi,
          to: candidateEdit?.premi,
        },
      ],
    };
    saveCandidate(editData);
  };

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

  const setArrayLinguagesToPush = (e) => {
    let newArry = [];
    for (var lingue of e) {
      newArry.push(lingue.value);
    }
    setCandidateView((el) => {
      return {
        ...el,
        languages: newArry,
      };
    });
  };

  const saveCandidate = async (candidateEdit) => {
    await modifyCandidates(candidateEdit).then((res) => {
      const message = res.message;
      if (message == "Update successful") {
        setState("ok");
        const candidatoEditato = res.client;
        setCandidate(candidatoEditato);
        setCandidateView(candidatoEditato);
        setTimeout(() => {
          setState("start");
        }, 1000);
      }
    });
  };

  const setArraySkillsToPush = (e) => {
    let newArry = [];
    for (var skill of e) {
      newArry.push(skill.value);
    }
    setCandidateView((el) => {
      return {
        ...el,
        skills: newArry,
      };
    });
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const validateInput = (e) => {
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

  const handleSubmit = function (e) {
    setState("loading");
    e.preventDefault();
    setEditData();
  };

  const onPlacesChanged = () => {
    let places = searchBox.getPlaces();
    let place = places[0];
    let city = place.formatted_address;
    let lat = place.geometry.location.lat();
    let lng = place.geometry.location.lng();

    setCandidateView((el) => {
      return {
        ...el,
        location: {
          city: city,
          lat: lat,
          lng: lng,
        },
      };
    });
  };

  const onLoadAutocomplete = (searchBox) => {
    setSearchBox(searchBox);
  };

  console.log("CANDIDATE =>", candidate);
  return (
    <form
      method="POST"
      onSubmit={(e) => handleSubmit(e)}
      className="default-form"
    >
      {state === "ok" ? (
        <div>
          <h1>Modificato</h1>
        </div>
      ) : (
        <div>
          {state !== "send" ? (
            <div className="row">
              <div className="col-6 mt-20">
                <div className="form-group">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    id="name-field"
                    defaultValue={candidateEdit?.name}
                    onChange={(e) =>
                      setCandidateView((el) => {
                        return {
                          ...el,
                          name: e.target.value,
                        };
                      })
                    }
                  />
                </div>

                {error.name && <span className="err">{error.name}</span>}
              </div>

              <div className="col-6 mt-20">
                <div className="form-group">
                  <label>Cognome</label>
                  <input
                    id="surname-field"
                    className={error.surname ? "errorInput" : ""}
                    type="text"
                    name="surname"
                    defaultValue={candidateEdit?.surname}
                    placeholder="Cognome"
                    onBlur={(e) => validateInput(e)}
                    onChange={(e) =>
                      setCandidateView((el) => {
                        return {
                          ...el,
                          surname: e.target.value,
                        };
                      })
                    }
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
                    value={candidateEdit?.phone}
                    onBlur={(e) => validateInput(e)}
                    onChange={(e) =>
                      setCandidateView((el) => {
                        return {
                          ...el,
                          phone: e.target.value,
                        };
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="col-6 mt-20">
                <div className="form-group">
                  <label>Età</label>
                  <input
                    type="number"
                    name="age"
                    placeholder={candidateEdit?.age}
                    id="age-field"
                    className={error.age ? "errorInput" : ""}
                    onBlur={(e) => validateInput(e)}
                    value={candidateEdit?.age}
                    onChange={(e) =>
                      setCandidateView((el) => {
                        return {
                          ...el,
                          age: e.target.value,
                        };
                      })
                    }
                  />
                </div>
              </div>

              <div className="col-6 mt-20">
                <div className="form-group">
                  <label>Sesso</label>
                  <select
                    onBlur={(e) => validateInput(e)}
                    value={candidateEdit?.gender}
                    className={
                      error.gender
                        ? "errorInput chosen-single form-select"
                        : "chosen-single form-select"
                    }
                    onChange={(e) =>
                      setCandidateView((el) => {
                        return {
                          ...el,
                          gender: e.target.value,
                        };
                      })
                    }
                    required
                  >
                    <option>M</option>
                    <option>F</option>
                    <option>Preferisco non rispondere</option>
                  </select>
                </div>
              </div>

              <div className="col-6 mt-20">
                <div className="form-group">
                  <label>Mansione</label>
                  <input
                    value={candidateEdit?.mansione}
                    onBlur={(e) => validateInput(e)}
                    className={error.mansione ? "errorInput" : ""}
                    onChange={(e) =>
                      setCandidateView((el) => {
                        return {
                          ...el,
                          mansione: e.target.value,
                        };
                      })
                    }
                    id="Mansione-field"
                    type="text"
                    name="mansione"
                    placeholder="Mansione"
                  />
                </div>
              </div>

              <div
                className="col-6
         mt-20"
              >
                <div className="form-group">
                  <label>Categoria</label>

                  <select
                    onBlur={(e) => validateInput(e)}
                    value={candidateEdit?.category}
                    className={
                      error.gender
                        ? "errorInput chosen-single form-select"
                        : "chosen-single form-select"
                    }
                    onChange={(e) =>
                      setCandidateView((el) => {
                        return {
                          ...el,
                          category: e.target.value,
                        };
                      })
                    }
                    name="category"
                    placeholder={candidateEdit?.category}
                    required
                  >
                    <option>Industriale</option>
                    <option>Informatica</option>
                    <option>Medico Sanitario</option>
                    <option>Commerciale</option>
                  </select>
                </div>
              </div>

              {/* <!-- Search Select --> */}
              <div className="col-lg-6 col-md-12">
                <div className="form-group ">
                  <label>Lingue parlate </label>
                  <Select
                    defaultValue={[lingue[2]]}
                    isMulti
                    name="colors"
                    options={lingue}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => setArrayLinguagesToPush(e)}
                  />
                </div>
              </div>

              {/* <!-- Search Select --> */}
              <div className="col-lg-6 col-md-12">
                <div className="form-group ">
                  <label>Skills </label>
                  <Select
                    defaultValue={[skills[2]]}
                    isMulti
                    name="colors"
                    options={skills}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => setArraySkillsToPush(e)}
                  />
                </div>
              </div>

              <div className="col-6 mt-20">
                <div className="form-group">
                  <label>Stato</label>
                  <select
                    value={candidateEdit?.role}
                    className=" chosen-single form-select"
                    name="status"
                    onChange={(e) =>
                      setCandidateView((el) => {
                        return {
                          ...el,
                          status: e.target.value,
                        };
                      })
                    }
                    required
                  >
                    <option>new</option>
                    <option>approved</option>
                    <option>waiting</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="row">
                    <div className="form-group col-lg-12 col-md-12">
                      <label>Città</label>
                      {isLoaded && (
                        <StandaloneSearchBox
                          onLoad={onLoadAutocomplete}
                          onPlacesChanged={onPlacesChanged}
                        >
                          <input
                            value={candidateEdit?.location?.city}
                            onBlur={(e) => validateInput(e)}
                            className={error.location ? "errorInput" : ""}
                            onChange={(e) =>
                              setCandidateView((el) => {
                                return {
                                  ...el,
                                  location: {
                                    ...el?.location,
                                    city: e.target.value,
                                  },
                                };
                              })
                            }
                            id="location-field"
                            type="text"
                            name="città"
                            placeholder="Città"
                          />
                        </StandaloneSearchBox>
                      )}
                    </div>

                    {/* 
        <div className=" col-lg-6 col-md-6">
        <div className="form-group">
       
          <label>Latitude</label>
          <input type="text" name="name" placeholder="Melbourne" />

          </div>
        
        </div> */}

                    {/* <!-- Input --> */}
                    {/*   <div className="col-lg-6 col-md-6">
        <div className="form-group ">
         
          <label>Longitude</label>
          <input type="text" name="name" placeholder="Melbourne" />
          </div>
        
        </div> */}
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group range-slider-one">
                        <label>Disponibile a spostarsi entro</label>
                        <InputRange
                          formatLabel={(value) => ``}
                          minValue={0}
                          maxValue={100}
                          value={getDestination}
                          className={error.getDestination ? "errorInput" : ""}
                          onBlur={(e) => validateInput(e)}
                          onChange={(value) => handleOnChange(value)}
                        />
                        <div className="input-outer">
                          <div className="amount-outer">
                            <span className="area-amount">
                              {candidateEdit?.rangeWithin}
                            </span>
                            km
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <button className="theme-btn btn-style-three">
                        Cerca città
                      </button>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-6 col-md-12">
                  <div className="form-group ">
                    <div className="map-outer">
                      <div style={{ height: "420px", width: "100%" }}>
                        <Map />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="form-group col-lg-12 col-md-12">
                <label>Note</label>
                <textarea
                  onChange={(e) =>
                    setCandidateView((el) => {
                      return {
                        ...el,
                        note: e.target.value,
                      };
                    })
                  }
                  placeholder={candidateEdit?.note}
                ></textarea>
              </div>
              {
                <Education
                  setCandidateView={setCandidateView}
                  educazione={candidateEdit?.educazione}
                ></Education>
              }
              {
                <AwardsCertificates
                  setCandidateView={setCandidateView}
                  premi={candidateEdit?.premi}
                ></AwardsCertificates>
              }
               {
                <Experience
                  setCandidateView={setCandidateView}
                  esperienze={candidateEdit?.esperienze}
                ></Experience>
              }
              {/*      <AwardsCertificates
          setPremiCertificatiToSend={setPremiCertificatiToSend}
          educazioneList={candidate?.premi}
        ></AwardsCertificates> 
 */}

              {/* <div className="col-6 mt-20">
          <div className="form-group">
            <label>Username</label>
            <input
              id="username-field"
              className={error.username ? "errorInput" : ""}
              type="text"
              name="username"
              value={candidate?.username}
              placeholder="Username"
              onBlur={(e) => validateInput(e)}
              onChange={(e) =>
                setcandidate((candidate) => ({
                  ...candidate,
                  credentials: {
                    ...candidate?.credentials,
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
              <label>Stato</label>
                   <select
                     value={candidate?.role}
                     className= " chosen-single form-select"
                     name="status"
                     onChange={(e) =>
                      setcandidate({ ...candidate, status: e.target.value })
                     }
                     required
                   >
                     <option>new</option>
                     <option>approved</option>
                     <option>waiting</option>
                   </select>
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
                setcandidate((candidate) => ({
                  ...candidate,
                  credentials: {
                    ...candidate?.credentials,
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
                setcandidate({
                  ...candidate,
                  confirmPassword: e.target.value,
                })
              }
              required
            />
          </div>
          {error.confirmPassword && (
            <span className="err">{error.confirmPassword}</span>
          )}
        </div> */}
              <div className="form-group col-lg-12 col-md-12">
                <button type="submit" className="theme-btn btn-style-one">
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Loader></Loader>
              <h1>Stiamo inserendo il nuovo candidato</h1>
            </div>
          )}
        </div>
      )}
    </form>
  );
};

export default FormInfoBox;

import { useState } from "react";
import { createCompany } from "../../../../services/public/createCompany";
import Loader from "../../../loader/Loader";

const FormContent = ({ dataCL }) => {
  const handleSubmit = async (event, data) => {
    event.preventDefault();
    setStateRequest({ ...stateRequest, message: "send" });
    data.interstedTo.push(dataCL.publicName);
    await createCompany(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) =>
        setStateRequest({ ...stateRequest, error: true, message: err })
      );
  };

  const [stateRequest, setStateRequest] = useState({
    error: false,
    success: false,
    message: "",
  });

  const [state, setstate] = useState({
    name: "",
    piva: "",
    email: "",
    indirizzo: {
      city: "",
      via: "",
    },
    ccnl: "",
    workArea: "",
    nomeReferente: "",
    cognomeReferente: "",
    interstedTo: [],
  });

  return (
    <form method="post" onSubmit={() => handleSubmit(event, state)}>
      {!stateRequest.success ? (
        <div className="row clearfix">
          {stateRequest.message === "send" && !stateRequest.success ? (
            <Loader></Loader>
          ) : (
            <div class="row">
              <div class="error">
                {stateRequest.error ? (
                  <div>
                    <h6>{stateRequest.message}</h6>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <h5>
                  Richiesta di ricontatto per il candidato {dataCL.publicName}
                </h5>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <input
                  type="text"
                  name="NomeAzienda"
                  placeholder="Nome Azienda"
                  required
                  onChange={(e) => setstate({ ...state, name: e.target.value })}
                />
              </div>
              {/* End .col */}
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <input
                  type="text"
                  name="P.iva"
                  placeholder="P.iva"
                  onChange={(e) => setstate({ ...state, piva: e.target.value })}
                  required
                />
              </div>
              {/* End .col */}
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setstate({ ...state, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <input
                  type="text"
                  name="Area di lavoro"
                  placeholder="Area di lavoro"
                  onChange={(e) =>
                    setstate({ ...state, workArea: e.target.value })
                  }
                  required
                />
              </div>
              {/* End .col */}
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <input
                  type="text"
                  name="Città"
                  placeholder="Città"
                  onChange={(e) =>
                    setstate((state) => ({
                      ...state,
                      indirizzo: { ...state.indirizzo, city: e.target.value },
                    }))
                  }
                  required
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <input
                  type="text"
                  name="Indirizzo"
                  placeholder="Indirizzo"
                  onChange={(e) =>
                    setstate((state) => ({
                      ...state,
                      indirizzo: { ...state.indirizzo, via: e.target.value },
                    }))
                  }
                  required
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <input
                  type="text"
                  name="CNNL"
                  placeholder="CCNL"
                  onChange={(e) => setstate({ ...state, ccnl: e.target.value })}
                  required
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <input
                  type="text"
                  name="Nome Referente"
                  placeholder="Nome Referente"
                  required
                  onChange={(e) =>
                    setstate({ ...state, nomeReferente: e.target.value })
                  }
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                <input
                  type="text"
                  name="Cognome Referente"
                  placeholder="Cognome Referente"
                  required
                  onChange={(e) =>
                    setstate({ ...state, cognomeReferente: e.target.value })
                  }
                />
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea
                  className="darma"
                  name="message"
                  placeholder="Se preferisci, aggiungi qui qualche informazione in più.."
                ></textarea>
              </div>
              {/* End .col */}

              {/*               <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-0">
                <button
                  className="theme-btn btn-style-one"
                  type="submit"
                  name="submit-form"
                >
                  Invia Richiesta
                </button>
              </div> */}
              {/* End .col */}
            </div>
          )}

          {/* Gestione Richiesta - Init */}
          {stateRequest.message === "send" && !stateRequest.success ? (
            <h3> Stiamo inoltrando la tua richiesta...</h3>
          ) : (
            <div class="row mt-50">
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
          {stateRequest.message !== "send" ? (
            <h3> Invia la tua richiesta</h3>
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

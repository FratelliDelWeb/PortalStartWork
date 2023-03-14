import Link from "next/link";
import { useState, useEffect } from "react";
import { getCandidateIdPrivate } from "../../../../../../services/private/getCandidateIdPrivate";
import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

const ApplyJobModalContent = ({ idOffer, idCliente }) => {
  const [stato, setStato] = useState("start");
  const [ErrorMessage, setErrorMessage] = useState();
  const [interests, setInterests] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStato("send");
    setDataToSend();
  };

  const addOffers = async (modifies) => {
    await axios({
      method: "post",
      url: api + "/candidates/modify",
      data: modifies,
    })
      .then((response) => {
        const data = response.data;
        console.log(data);
        if(data?.message ==="Update successful"){
          setStato("ok");
          setStatusOffers("attivo");
        }
    
      })
      .catch((e) => {
        setStato("error");
        console.log(e.response.data?.message)
        setErrorMessage(e.response.data?.message)
          
      });
  };

  const setDataToSend = async () => {
    const to = [];
    if (interests) {
      for (var offer of interests) {
        to.push(offer);
      }
    }
    to.push(idOffer);

    if (!interests) {
      let eitData = {
        id: idCliente,
        fields: [
          {
            name: "interstedTo",
            from: [" "],
            to: to,
          },
        ],
      };

      console.log(eitData);
      addOffers(eitData);
    } else {
      let eitData = {
        id: idCliente,
        fields: [
          {
            name: "interstedTo",
            from: interests,
            to: to,
          },
        ],
      };

      console.log(eitData);
      addOffers(eitData);
    }
  };

  const getUserInterstedTo = async (idCliente) => {
    await getCandidateIdPrivate(idCliente).then((res) => {
      console.log("res", res);
      const intersted = res.interstedTo;
      setInterests(intersted);
    });
  };

  useEffect(() => {
    getUserInterstedTo(idCliente);
  }, []);

  return (
    <form
      metod="post"
      className="default-form job-apply-form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="row">
        {stato !== "send"  ? (
          <>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <h6>{idOffer.jobTitle}</h6>
              <h6>
                Invia la candidatura i nostri consulenti ti proporrano
                all'azienda{" "}
              </h6>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <textarea
                className="darma"
                name="message"
                placeholder="Messaggio"
                required
              ></textarea>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <div className="input-group checkboxes square">
                <input type="checkbox" name="remember-me" id="rememberMe" />
                <label htmlFor="rememberMe" className="remember">
                  <span className="custom-checkbox"></span> Accetta{" "}
                  <span data-bs-dismiss="modal">
                    <Link href="/terms">temini e condizioni</Link>
                  </span>
                </label>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <button
                className="theme-btn btn-style-one w-100"
                type="submit"
                name="submit-form"
              >
                Invia candidatura
              </button>
            </div>
          </>
        ) : (<>
                  {stato !== "ok" ? (<div>Candidatura inviata con success </div>) : (<div>{ErrorMessage}</div>)}
        </>

          
        )}

        {/* End .col */}
      </div>
    </form>
  );
};

export default ApplyJobModalContent;

import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
const api = process.env.API_ENDPOINT;

const ApplyJobModalContent = ({ idOffer, idCliente, cookieSend }) => {
  console.log(idCliente);
  const [idOfferta, setidOfferta] = useState(idOffer._id);
  const [userinterstedTo, setinterstedTo] = useState([""]);
  const router = useRouter();
  const [stato, setStato] = useState("start");
  const [ErrorMessage, setErrorMessage] = useState();
  useEffect(() => {
    setOffer(idOfferta, idCliente);

    return () => {};
  }, [idCliente, idOfferta]);

  const handleSubmit = async (e, idOfferta) => {
    e.preventDefault();
    setStato("send");
    setDataToSend(idOfferta, idCliente, userinterstedTo);
  };

  const addOffers = async (eitData, cookieSend) => {
    console.log("SATIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII", eitData);

    await axios({
      method: "post",
      url: api + "/candidates/modify",
      headers: { Cookie: { cookieSend } },
      data: eitData,
    })
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((e) => {
        setStato("error");
        setErrorMessage(e.response.data.message),
          console.log(e.response.data.message);
      });
  };

  const addUserInterstedTo = async (idCliente) => {
    const res = await axios({
      method: "post",
      url: api + "/candidates/" + idCliente,
      headers: { Cookie: { cookieSend } },
    });
    const data = await res.data;

    const interted = data.interstedTo;
    return interted;
  };

  const setOffer = async (idOfferta, idCliente) => {
    const interseted = await addUserInterstedTo(idCliente);
    console.log(interseted);
    setinterstedTo(interseted);

    console.log(userinterstedTo);
  };

  const setDataToSend = async (idOfferta, idCliente, interseted) => {
    console.log(interseted);
    const to = [];
    for (var offer of interseted) {
      to.push(offer);
    }

    to.push(idOfferta._id);

    let eitData = {
      id: idCliente,
      fields: [
        {
          name: "interstedTo",
          from: interseted,
          to: to,
        },
      ],
    };

    console.log(eitData);
    addOffers(eitData);
  };

  return (
    <form
      metod="post"
      className="default-form job-apply-form"
      onSubmit={(e) => handleSubmit(e, idOffer)}
    >
      <div className="row">
        {stato !== "send" && stato !== "error" ? (
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
        ) : (
          <div>{ErrorMessage}</div>
        )}

        {/* End .col */}
      </div>
    </form>
  );
};

export default ApplyJobModalContent;

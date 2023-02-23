import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from 'axios';



const ApplyJobModalContent = ({idOffer , idCliente , cookieSend}) => {
  console.log(idCliente)
  const [idOfferta , setidOfferta] = useState(idOffer._id);
  const [userinterstedTo , setinterstedTo] = useState([""]) 
  const router = useRouter();
  
  useEffect(() => {
   setOffer (idOfferta ,idCliente );




   return () => {};
   


  }, [idCliente,idOfferta]);


  const handleSubmit = async (e,idOfferta) => {
    e.preventDefault();
    
    setDataToSend(idOfferta,idCliente,userinterstedTo)

  };


  const addOffers = async (eitData, cookieSend) => {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/candidates/modify' ,
        headers: { Cookie: {cookieSend},}, 
        data: 
          eitData
        
      });
      const data = await res.data;
      console.log(data)
  }


  const addUserInterstedTo = async(idCliente) =>{
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/candidates/' + idCliente,
      headers: { Cookie: {cookieSend},}, 
    });
    const data = await res.data;

    const interted = data.interstedTo
    return (interted)
  }



  const setOffer = async (idOfferta ,idCliente ) => {
    
   const interseted = await addUserInterstedTo(idCliente);
   console.log(interseted)
   setinterstedTo(interseted)
   
 console.log(userinterstedTo)



  }

  const setDataToSend = async (idOfferta,idCliente,interseted) =>{

    console.log(interseted)
    const to = [];
    for(var offer of interseted ){
      to.push(offer);
      
    }

    to.push(idOfferta)
  
    let  eitData= {
      "id": idCliente,
      "fields" : [
       {
         "name": "interstedTo",
         "from":interseted,
         "to":to
     }
   ]};

   console.log(eitData);
   addOffers(eitData);

  }

  return (
    <form metod="post" className="default-form job-apply-form" onSubmit={(e) => handleSubmit(e,idOffer)}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
         {/*  <div className="uploading-outer apply-cv-outer">
            <div className="uploadButton">
              <input
                className="uploadButton-input"
                type="file"
                name="attachments[]"
                accept="image/*, application/pdf"
                id="upload"
                multiple=""
                required
              />
              <label
                className="uploadButton-button ripple-effect"
                htmlFor="upload"
              >
                Upload CV (doc, docx, pdf)
              </label>
            </div>
          </div> */}
         <h6>{idOffer.jobTitle}</h6>
          <h6>Invia la candidatura i nostri consulenti ti proporrano all'azienda </h6>

        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Messaggio"
            required
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="input-group checkboxes square">
            <input type="checkbox" name="remember-me" id="rememberMe" />
            <label htmlFor="rememberMe" className="remember">
              <span className="custom-checkbox"></span> Accetta{" "}
              <span data-bs-dismiss="modal">
                <Link href="/terms">
                  temini e condizioni
                </Link>
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
        {/* End .col */}
      </div>
    </form>
  );
};

export default ApplyJobModalContent;

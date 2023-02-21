
import DestinationRangeSlider from "../../../candidates-listing-pages/components/DestinationRangeSlider"
const FormContent = ({dataCL}) => {
  return (
    <form  method="post">

      <div className="row clearfix">
      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
         <h5>
          Richiesta di contattato per candidato  {dataCL._id}
         </h5>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <input type="text" name="NomeAzienda" placeholder="Nome Azienda" required />
        </div>
        {/* End .col */}
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <input type="text" name="Partita iVA" placeholder="P.IVA" required />
        </div>
        {/* End .col */}
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <input type="text" name="Città" placeholder="Città" required />
        </div>
        {/* End .col */}
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
        <input type="text" name="Settore" placeholder="Città" required />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <input type="text" name="CNNL" placeholder="CCNL" required />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
        <input type="text" name="Nome Referente" placeholder="Nome Referente" required />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <input type="text" name="Cognome Referente" placeholder="Cognome Referente" required />
        </div>



        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-0">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="submit-form"
          >
            Invia Richiesta
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default FormContent;

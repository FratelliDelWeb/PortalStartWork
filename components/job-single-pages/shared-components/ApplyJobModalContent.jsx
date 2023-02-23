import Link from "next/link";

const ApplyJobModalContent = () => {
  return (
    <form className="default-form job-apply-form">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <h6>Accedi o registrati all area privata per candidarti all annuncio id lavoro</h6>
           
        </div>
        {/* End .col */}
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <button
            className="theme-btn btn-style-one width-100"
            type="submit"
            name="submit-form"
          >
           Accedi
          </button>
        </div>


        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
        <p>Hai già una account?Registrati compilando il nostro modulo.</p>
        </div>
        {/* End .col */}

       
        {/* End .col */}

     
        {/* End .col */}
      </div>
    </form>
  );
};

export default ApplyJobModalContent;

import Register from "../register/Register";
import FormContent from "./FormContent";

const CandidatiPopup = () => {
  return (
    <>
      <div className="modal fade" id="candidatiPopupModal">
        <div className="modal-dialog modal-lg modal-dialog-centered login-candidatura modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>
            {/* End close modal btn */}

            <div className="modal-body">
              {/* <!-- Login modal --> */}
        
              <div id="login-modal">
                      <h2>INVIA CANDIDATURA </h2>
                      <h4>REGISTRATI A START-WORK</h4>

              <p>Un nostro consulente ti ricontatterÃ  per completare il tuo profilo e rendero visibile sul sito!</p>
                {/* <!-- Login Form --> */}
                <div className="login-form default-form">
                  <FormContent />
                </div>
                {/* <!--End Login Form --> */}
              </div>
              {/* <!-- End Login Module --> */}
            </div>
            {/* En modal-body */}
          </div>
          {/* End modal-content */}
        </div>
      </div>
      {/* <!-- Login Popup Modal --> */}

      <div className="modal fade" id="registerModal">
        <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>
            {/* End close modal btn */}

            <div className="modal-body">
              {/* <!-- Login modal --> */}
              <div id="login-modal">
                {/* <!-- Login Form --> */}
                <div className="login-form default-form">
                  <Register />
                </div>
                {/* <!--End Login Form --> */}
              </div>
              {/* <!-- End Login Module --> */}
            </div>
            {/* En modal-body */}
          </div>
          {/* End modal-content */}
        </div>
      </div>
      {/* <!-- Login Popup Modal --> */}
    </>
  );
};

export default CandidatiPopup;

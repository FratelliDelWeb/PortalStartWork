import FormContent from "../../common/form/candidati/FormContent";
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import Header from "../invia-candidatura/Header";

const index = () => {
  return (
    <>
    <Header /> 
      {/* <!--End Main Header -->  */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <MobileMenu />
      {/* End MobileMenu */}

      <div className="candidati-section row ">
        <div
          className="col-2"
          style={{ backgroundImage: "url(images/background/10.jpg)" }}
        ></div>
        <div className="outer-box col-10 p-5">
          {/* <!-- Login Form --> */}
          <h2>INVIA CANDIDATURA </h2>
                      <h4>REGISTRATI A START-WORK</h4>

              <p>Un nostro consulente ti ricontatterà per completare il tuo profilo e rendero visibile sul sito!</p>
          <div className=" default-form">
            <FormContent />
          </div>
          {/* <!--End Login Form --> */}
        </div>
      </div>
      {/* <!-- End Info Section --> */}
    </>
  );
};

export default index;

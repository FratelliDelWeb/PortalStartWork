import LoginPopup from "../../common/form/login/LoginPopup";
import Footer from "../../home-9/Footer"
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import Address from "./Address";
import ContactForm from "./ContactForm";
import MapBox from "./MapBox";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="map-section">
        <div className="map-outer">
          <MapBox />
        </div>
      </section>
      {/* <!-- End Map Section --> */}

      <section className="contact-section">
        <div className="auto-container">
          <div className="upper-box">
            <div className="row">
              <Address />
            </div>
            {/* End .row */}
          </div>
          {/* End upperbox */}

          {/* <!-- Contact Form --> */}
          <div className="row ">
          <div className="col-6">
            <h2>Tutte le nostre sedi</h2>
         <h6>Amsterdam (Paesi Bassi)
Hoofddorp 2132 WT, SI, 17-27</h6>

<h6>Casalnuovo di Napoli (NA)
Via Napoli n. 159</h6>

<h6>Corigliano Rossano
Via Nazionale snc</h6>

          </div>
          <div className="col-6 ">
          <div className="contact-form default-form">
            <h3>Inviaci un messaggio mer maggiori informazioni:</h3>
            <ContactForm />
            {/* <!--Contact Form--> */}
          </div>
          </div>

          </div>
         
      
          {/* <!--End Contact Form --> */}
        </div>
      </section>
      {/* <!-- Contact Section --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;

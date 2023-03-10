import Link from "next/link";
import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterContent4 from "../footer/FooterContent4";

const Footer = () => {
  return (
    <footer className="main-footer style-six">
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                
                <Link href="/">
                  <img src="/images/logo.svg" width="120px" alt="brand" />
                </Link>
         
                </div>
                <p className="phone-num">
                  <span>Contatti </span>
                  <a href="thebeehost@support.com">081 277 9565</a>
                </p>
                <p className="address">
                Via Napoli n. 159 80013 
                  <br />Casalnuovo di Napoli (NA) <br />
                  <a href="mailto:support@superio.com" className="email">
                    info@start-work.it
                  </a>
                </p>
              </div>
            </div>
            {/* End footer left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent4 />
              </div>
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;

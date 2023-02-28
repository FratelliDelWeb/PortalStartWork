import LoginPopup from "../../common/form/login/LoginPopup";
import Partner from "../../common/partner/Partner";
import Footer from "../../home-9/Footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import Funfact from "../../fun-fact-counter/Funfact";
import ImgBox from "./ImgBox";
import IntroDescriptions from "./IntroDescriptions";

import CallToAction7 from "../../call-to-action/CallToAction7";


import Testimonial2 from "../../testimonial/Testimonial2";
import Block1 from "../../block/Block1";
import Breadcrumb from "../../common/Breadcrumb";

import StepsBlock from "../../block/StepsBlock";
import AppSection4 from "../../app-section/AppSection4";
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
{/* 
      <Breadcrumb title="Servizi" meta="Servizi" /> */}
      {/* <!--End Page Title--> */}

      <section className="about-section-three">
        <div className="auto-container">
      {/*     <ImgBox /> */}
      <AppSection4></AppSection4>
   
 
          {/* <!-- Fun Fact Section --> */}
         {/*  <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div> */}
          {/* <!-- Fun Fact Section --> */}

         {/*  <IntroDescriptions /> */}
        </div>
      </section>
      {/* <!-- End About Section Three --> */}


      <CallToAction7 />
    
      {/* <!-- End CallToAction2 --> */}

      {/* <!-- End Testimonial Section --> */}

      <StepsBlock />
      {/* <!-- End Work Section --> */}

      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;

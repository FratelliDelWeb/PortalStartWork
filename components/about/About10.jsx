import AboutBlock from "../block/AboutBlock";

const About10 = () => {
  return (
    <>
      {/* <!-- About Section --> */}
      <section className="about-section-two ">
        <div className="auto-container">
          <div className="row grid-base justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="row icon-side-row wow fadeInRight">
                <AboutBlock />
              </div>
            </div>
            {/* End .col */}

            <div className="content-column mb-0 col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="wow fadeInLeft">
                <div className="sec-title mb-0">
                  <h2 className="fw-700">
                    Benvenuto in
                    <br /> StarWork!
                  </h2>
                  <div className="text mt-36 md:mt-16">
                   Az
                  </div>
                </div>
                <a href="#" className="theme-btn -blue-outline mt-56 md:mt-16">
                Invia candidatura
                </a>
              </div>
            </div>
            {/* <!-- Content Column --> */}
          </div>
        </div>
      </section>
      {/* <!-- End About Section -->  */}
    </>
  );
};

export default About10;

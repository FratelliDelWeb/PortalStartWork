import Link from "next/link";
import Education from "./Education";
import Experiences from "./Experiences";
import AwardsCertificates from "./AwardsCertificates";

import InfoBox from "./InfoBox";
import TableInvoice from "./TableInvoice";

const index = ({candidateView}) => {
  console.log(candidateView)
  return (
    <>
      {/* <!-- Invoice Section --> */}
      <section className="invoice-section">
        <div className="auto-container">
          <div className="upper-box btn-box">
          <div className="tabs-box">
                      <section className="candidate-detail-section">
                        <div className="candidate-detail-outer">
                          <div className="auto-container">
                            <div className="row">
                              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                                <div className="candidate-block-five">
                                  <div className="inner-box">
                                    <div className="content">
                                      <figure className="image">
                                        <img
                                          src={candidateView?.avatar}
                                          alt="avatar"
                                        />
                                      </figure>
                                      <h4 className="name d-flex ">
                                        {candidateView?.name}{" "}
                                        {candidateView?.surname} -{" "}
                                        {candidateView?.publicName}
                                      </h4>

                                      <ul className="candidate-info">
                                        <li className="designation">
                                          {candidateView?.mansione}
                                        </li>
                                        <li>
                                        <i class="las la-map-marker-alt"></i>
                                          {candidateView?.location?.city}
                                        </li>
                                        <li>
                                        <i class="lar la-envelope"></i>
                                          {candidateView?.email}
                                        </li>
                                        <li>
                                        <i class="las la-phone"></i>
                                          {candidateView?.phone}
                                        </li>
                                        {/*  <li>
                              <span className="icon flaticon-money"></span> $
                              {dataCL?.hourlyRate} / hour
                            </li> */}
                                        <li>
                                        <i class="las la-calendar-day"></i>
                                          Aggiunto il: {candidateView?.created_at}
                                        </li>
                                      </ul>

                                      <ul className="post-tags">
                                        {candidateView?.skills?.map((val, i) => (
                                          <li key={i}>{val}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
          
          </div>
        </div>
        {/* End auto-container */}

        <div className="auto-container pt-0 p-5">
          <div className="invoice-wrap">
            <div className="invoice-content p-4 ">
              <div className="logo-box">
               
              </div>
              {/* End logobox */}

           {/*    <InfoBox /> */}
         
              {/* End infobox */}
              <div className="row">
                <div className="col-8">
                <Education educazione={candidateView.educazione}></Education>
              
              <Experiences esperienze ={candidateView.esperienze}></Experiences>
             <AwardsCertificates premi ={candidateView.premi}></AwardsCertificates> 
                </div>
                <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                {/*   <div className="btn-box">
                    <a
                      className="theme-btn btn-style-one"
                      href="/images/sample.pdf"
                      download
                    >
                      Download CV
                    </a>
                    <button className="bookmark-btn">
                      <i className="flaticon-bookmark"></i>
                    </button>
                  </div> */}

                  <div className="sidebar-widget">
                    <div className="widget-content">
                      <ul className="job-overview">
                      <li>
                        <i class=" icon la-2x iconB   las la-user-tag"></i>
                          <h5>Nome Pubblico</h5>
                          <span>{candidateView.publicName}</span>
                        </li>

                        <li>
                        <i class=" icon iconB la-2x las la-tag"></i>
                          <h5>Categoria</h5>
                          <span>{candidateView.category}</span>
                        </li>
                        <li>
                        <i class="icon  la-2x  iconB las la-route"></i>
                          <h5>Disponibile a spostarsi entro :</h5>
                          <span>{candidateView.rangeWithin} /Km</span>
                        </li>
                        <li>
                        <i class="las icon  la-2x  iconB la-language"></i>
                          <h5>Lingue:</h5>
                          <span>{candidateView.languages}</span>
                        </li>


                        <li>
                        <i class="las icon iconB la-2x la-hourglass-half"></i>
                          <h5>Età:</h5>
                          <span>{candidateView.age}</span>
                        </li>


                        <li>
                        <i class="las icon  la-2x  iconB  la-user"></i>
                          <h5>Genere:</h5>
                          <span>{candidateView.gender}</span>
                        </li>

                       

                    {/*     <li>
                        <i class="las  icon  la-2x  iconB la-graduation-cap"></i>
                          <h5>Education Level:</h5>
                          <span>Master Degree</span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  {/* End .sidebar-widget conadidate overview */}

                 {/*  <div className="sidebar-widget social-media-widget">
                    <h4 className="widget-title">Social media</h4>
                    <div className="widget-content">
                      <div className="social-links">
                       <Social /> 
                      </div>
                    </div>
                  </div> */}
                  {/* End .sidebar-widget social-media-widget */}

                 {/*  <div className="sidebar-widget">
                    <h4 className="widget-title">Professional Skills</h4>
                    <div className="widget-content">
                      <ul className="job-skills">
                         <JobSkills />
                      </ul>
                    </div>
                  </div> */}
                  {/* End .sidebar-widget skill widget */}

                {/*   <div className="sidebar-widget contact-widget">
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="widget-content">
                      <div className="default-form">
                       <Contact /> 
                      </div>
                    </div>
                  </div> */}
                  {/* End .sidebar-widget contact-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              </div>
     
              <div className="table-outer">
               {/*  <TableInvoice /> */}
              </div>
              {/* End table-outer */}
            </div>
            {/* End .invoice-content */}

            <div className="invoice-footer">
              <ul className="bottom-links">
              <li className="logo">
    
                  <img src="/images/logo.svg" alt="brand"></img>
              
                 
                </li>
                <li>
                  <a
                    href="https://themeforest.net/user/ib-themes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    www.start-work.it
                  </a>
                </li>
                <li>
                  <a href="invoice@superio.com">info@start-work.com</a>
                </li>
                <li>
                  <a href="tel:351 990 7274">351 990 7274</a>
                </li>
              </ul>
            </div>
            {/* End invoice footer */}
          </div>
        </div>
      </section>
      {/* <!-- End Invoice Section -->  */}
    </>
  );
};

export default index;

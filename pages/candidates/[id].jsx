import dynamic from "next/dynamic";
import candidates from "../../data/candidates";
import candidateResume from "../../data/candidateResume";
import LoginPopup from "../../components/common/form/login/LoginPopup";
import FooterDefault from "../../components/footer/common-footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import MobileMenu from "../../components/header/MobileMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/common/Seo";
import Contact from "../../components/candidates-single-pages/shared-components/Contact";
import GalleryBox from "../../components/candidates-single-pages/shared-components/GalleryBox";
import Social from "../../components/candidates-single-pages/social/Social";
import JobSkills from "../../components/candidates-single-pages/shared-components/JobSkills";
import AboutVideo from "../../components/candidates-single-pages/shared-components/AboutVideo";
import RichiestaPopup from "../../components/common/form/richiestaCandidato/RichiestaPopup";
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const res = await fetch("http://localhost:3000/api/public/candidates/" + id);
  const data = await res.json();

  return { props: { dataCL: data } };
};

const CandidateSingleDynamicV1 = ({ dataCL }) => {
  const [candidate, setCandidate] = useState({});

  const getITDateTime = (now) => {
    return new Date(now).toLocaleDateString("it-IT");
  };

  useEffect(() => {
    if (!dataCL) <h1>Loading...</h1>;
    else setCandidate(dataCL);
    return () => {};
  }, [dataCL]);
  console.log(candidate);

  return (
    <>
      <Seo pageTitle="Scheda del candidato" />

      {/* <!-- Header Span --> */}
      <span className="header-span"></span>
      <RichiestaPopup dataCL={dataCL}></RichiestaPopup>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}
      <section className="candidate-detail-section">
        <div className="upper-box">
          <div className="auto-container">
            <div className="candidate-block-five">
              <div className="inner-box">
                <div className="content">
                  <figure className="image">
                    <img src={candidate?.avatar} alt="avatar" />
                  </figure>

                  <ul className="candidate-info">
                    <li>
                      <h4 className="name">{candidate?.publicName}</h4>
                    </li>
                    <li>
                      <h5 className="job">{candidate?.mansione}</h5>
                    </li>
                  </ul>
                  <ul className="candidate-info">
                    <li className="designation">{candidate?.designation}</li>
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {candidate?.location?.city}
                    </li>
                    {/* <li>
                      <span className="icon flaticon-money"></span> $
                      {candidate?.hourlyRate} / hour
                    </li> */}
                    <li>
                      <span className="icon flaticon-clock"></span> Candidato
                      pubblicato il
                      <strong> {getITDateTime(candidate?.created_at)} </strong>
                    </li>
                  </ul>

                  <ul className="post-tags">
                    {candidate?.skills?.map((val, i) => (
                      <li key={i}>{val}</li>
                    ))}
                  </ul>
                </div>

                <div className="btn-box">
                  <a
                    data-bs-target="#richiestaPopupModal"
                    data-bs-toggle="modal"
                    className="theme-btn btn-style-one"
                    /*  href="/images/sample.pdf"
                    download */
                  >
                    Invia richiesta
                  </a>
                  <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                  </button>
                </div>
              </div>
            </div>
            {/*  <!-- Candidate block Five --> */}
          </div>
        </div>
        {/* <!-- Upper Box --> */}

        <div className="candidate-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-detail">
                  {/*                   <div className="video-outer">
                    <h4>Su di me</h4>
                    <AboutVideo />
                  </div> */}
                  {/* <!-- About Video Box --> */}
                  {/*  <p>{candidate?.note}</p> */}

                  {/* <!-- Portfolio --> */}
                  {/*                   <div className="portfolio-outer">
                    <div className="row">
                      <GalleryBox />
                    </div>
                  </div> */}

                  {/* <!-- Candidate Resume Start --> */}
                  {/*                   {candidate?.educazione?.map((resume) => (
                    <div
                      className={`resume-outer ${resume.themeColor}`}
                      key={resume.id}
                    >
                      <div className="upper-title">
                        <h4>{resume?.title}</h4>
                      </div> */}

                  {/* <!-- Start Resume BLock --> */}
                  {/*                       {resume?.blockList?.map((item) => (
                        <div className="resume-block" key={item.id}>
                          <div className="inner">
                            <span className="name">{item.meta}</span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item.name}</h3>
                                <span>{item.industry}</span>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item.year}</span>
                              </div>
                            </div>
                            <div className="text">{item.text}</div>
                          </div>
                        </div>
                      ))} */}

                  {/* <!-- End Resume BLock --> */}
                  {/*             </div> */}
                  {/*    ))} */}
                  {/* <!-- Candidate Resume End --> */}
                </div>
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    <div className="widget-content">
                      <ul className="job-overview">
                        {/*                         <li>
                          <i className="icon icon-calendar"></i>
                          <h5>Esperienza:</h5>
                          <span>{candidate?.experience}</span>
                        </li> */}

                        <li>
                          <i className="icon icon-expiry"></i>
                          <h5>Anni:</h5>
                          <span>{candidate?.age}</span>
                        </li>

                        {/* <li>
                          <i className="icon icon-rate"></i>
                          <h5>Salario corrente:</h5>
                          <span>11K - 15K</span>
                        </li> */}

                        {/* <li>
                          <i className="icon icon-salary"></i>
                          <h5>Salario aspettativa:</h5>
                          <span>26K - 30K</span>
                        </li> */}

                        <li>
                          <i className="icon icon-user-2"></i>
                          <h5>Sesso:</h5>
                          <span>{candidate?.gender}</span>
                        </li>

                        {/*                         <li>
                          <i className="icon icon-language"></i>
                          <h5>Lingue:</h5>
                          <span>{candidate?.languages}</span>
                        </li> */}

                        {/*                         <li>
                          <i className="icon icon-degree"></i>
                          <h5>Livello di educazione:</h5>
                          <span>Master Degree</span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  {/* End .sidebar-widget conadidate overview */}

                  {/*                   <div className="sidebar-widget social-media-widget">
                    <h4 className="widget-title">Social media</h4>
                    <div className="widget-content">
                      <div className="social-links">
                        <Social />
                      </div>
                    </div>
                  </div> */}
                  {/* End .sidebar-widget social-media-widget */}

                  {/* <div className="sidebar-widget">
                    <h4 className="widget-title">Skills Professionali</h4>
                    <div className="widget-content">
                      <ul className="job-skills">
                        <JobSkills skills={candidate.skills} />
                      </ul>
                    </div>
                  </div> */}
                  {/* End .sidebar-widget skill widget */}

                  <div className="sidebar-widget contact-widget">
                    <h4 className="widget-title">Contattaci</h4>
                    <div className="widget-content">
                      <div className="default-form">
                        <Contact />
                      </div>
                    </div>
                  </div>
                  {/* End .sidebar-widget contact-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
            </div>
          </div>
        </div>
        {/* <!-- job-detail-outer--> */}
      </section>
      {/* <!-- End Job Detail Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(CandidateSingleDynamicV1), {
  ssr: false,
});

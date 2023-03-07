import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardUsersSidebar from "../../../header/DashboardUsersSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
/* import MyResume from "./components/my-resume";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox"; */
import CopyrightFooter from "../../CopyrightFooter";
import DashboardHeader from "../../../header/DashboardHeader";
import MenuToggler from "../../MenuToggler";

import axios from "axios";
import React, { useState, useEffect } from "react";

const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

const index = ({ idCandidato }) => {
  const defaultProps = {
    id: "",
    age: "",
    category: "",
    esperienze: [],
    gender: "",
    languages: [],
    location: {
      city: "",
      lat: "",
      lng: "",
    },
    mansione: "",
    name: "",
    surname: "",
    note: "",
    phone: "",
    publicName: "",
    rangeWithin: 50,
    skills: [],
    status: "",
  };

  const [candidate, setCandidate] = useState(defaultProps);

  const [candidateView, setCandidateView] = useState(defaultProps);

  useEffect(() => {
    callCandidate(idCandidato);
  }, []);

  const callCandidate = async (id) => {
    await axios
      .get(api + "/candidates/" + id, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data;
        setCandidate(data);
        setCandidateView(data);
      });
  };

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardUsersSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Profilo CANDIDATO" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  {/* <!-- Job Detail Section --> */}
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
                                  <h4 className="name">
                                    {candidateView?.name}{" "}
                                    {candidateView?.surname} -{" "}
                                    {candidateView?.publicName}
                                  </h4>

                                  <ul className="candidate-info">
                                    <li className="designation">
                                      {candidateView?.mansione}
                                    </li>
                                    <li>
                                      <span className="icon flaticon-map-locator"></span>
                                      {candidateView?.location?.city}
                                    </li>
                                    {/*  <li>
                          <span className="icon flaticon-money"></span> $
                          {dataCL?.hourlyRate} / hour
                        </li> */}
                                    <li>
                                      <span className="icon flaticon-clock"></span>{" "}
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
                  </section>{" "}
                  <MyProfile
                    candidate={candidate}
                    candidateView={candidateView}
                    setCandidate={setCandidate}
                    setCandidateView={setCandidateView}
                  />
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Social Network</h4>
                  </div>
                  {/* End widget-title */}
                </div>
              </div>
              {/* <!-- Ls widget --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Contact Information</h4>
                  </div>
                  {/* End widget-title */}
                  {/*  <div className="widget-content">
                    <ContactInfoBox />
                  </div> */}
                </div>
              </div>
              {/* <!-- Ls widget --> */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;

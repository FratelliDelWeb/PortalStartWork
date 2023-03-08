import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
/* import MyResume from "./components/my-resume";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox"; */
import CopyrightFooter from "../../CopyrightFooter";
import DashboardHeader from "../../../header/DashboardHeader";
import MenuToggler from "../../MenuToggler";
import Invoice from "./components/invoice/index"
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

const index = ({  idUser }) => {
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
const [state,setState] = useState("view")
  useEffect(() => {
    callCandidate(idUser);
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

      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Il mio Curriculum"  stato= "Qui potrai visualizzare e modificare le tu informazioni " />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <Tabs>
          <div className="row">
            <div class="col-12">
                <div className="row">
                <div className="col-10">
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
                      </section>
                    </div> 
                
                </div>
                <div className="col-2">
                <TabList className="d-flex justify-content-end">
                <Tab className="tab-btn btn-map-innerModal m-1  approved">  <i class="las la-user-edit"></i> Modifica</Tab>
                    <Tab className="tab-btn  btn-map-innerModal m-1 totals"> <i class="lar la-file-pdf"></i> Anteprima PDF</Tab>
                 
                    </TabList>
                </div>
                </div>
            </div>
           
           
              <div className="col-lg-12">

                <div>
            
             

                <TabPanel>
                <div>
                  
                  <MyProfile
                    candidate={candidate}
                    candidateView={candidateView}
                    setCandidate={setCandidate}
                    setCandidateView={setCandidateView}
                  /></div>
                </TabPanel>
                <TabPanel>
                <Invoice candidateView={candidateView} ></Invoice>
                </TabPanel>

             


             
                </div>

              </div>
          </div>
         
          </Tabs>

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

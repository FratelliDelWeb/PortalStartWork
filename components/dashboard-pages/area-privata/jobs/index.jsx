import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardUsersSidebar from "../../../header/DashboardUsersSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import PostJobSteps from "./components/PostJobSteps";
import PostBoxForm from "./components/PostBoxForm";
import MenuToggler from "../../MenuToggler";

import axios from "axios";
import React, { useState, useEffect } from "react";

const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

const index = ({idJob}) => {
  const defaultProps = {
    category:"",
    codiceJod: "3" ,
    company:"",
    created_at:"",
    id:"",
    jobTitle:"Social Media Manager SM",
    jobType:"Full Time",
    location: "Pavia, IT",
    note:"",
  };


  const [job, setJob] = useState(defaultProps);

  const [jobView, setJobView] = useState(defaultProps);

  useEffect(() => {
    callCandidate(idJob);
  }, []);

  const callCandidate = async (id) => {
    await axios
      .get(api + "/jobOffers/" + id, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data;
         setJob(data);
         setJobView(data); 
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
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title= {jobView.jobTitle} />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                   
                    <h4>Lavoro ID : {jobView.codiceJod} </h4>
                    <h6> {jobView.created_at}</h6>
                  </div>

                  <div className="widget-content">
                    <PostJobSteps  />
                    {/* End job steps form */}
                    <PostBoxForm 
                    job={job}
                    jobView={jobView}
                    setJob={setJob}
                    setJobView={setJobView} />
                    {/* End post box form */}
                  </div>
                </div>
              </div>
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

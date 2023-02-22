import dynamic from "next/dynamic";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../../../components/common/Seo";
import RelatedJobs from "../../../../components/job-single-pages/related-jobs/RelatedJobs";

import JobSkills from "../../../../components/job-single-pages/shared-components/JobSkills";
import CompnayInfo from "../../../../components/job-single-pages/shared-components/CompanyInfo";
import MapJobFinder from "../../../../components/job-listing-pages/components/MapJobFinder";
import SocialTwo from "../../../../components/job-single-pages/social/SocialTwo";
import JobDetailsDescriptions from "../../../../components/job-single-pages/shared-components/JobDetailsDescriptions";
import ApplyJobModalContent from "../../../../components/job-single-pages/shared-components/ApplyJobModalContent";

import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import DashboardCandidatesHeader from '../../../header/DashboardCandidatesHeader';
import MobileMenu from "../../../header/MobileMenu";
import CopyrightFooter from "../../CopyrightFooter";
import BreadCrumb from "../../BreadCrumb";

import JobOverView from "./components/job-overview/JobOverView";
import jobs from "../../../../data/job-featured";
import axios from "axios";

export const getServerSideProps = async (context) => {
    const  id  = context.query.id;
    const res = await fetch('http://localhost:3000/api/public/jobOffers/'+ id);
    const data = await res.json();
    return{props:{dataOL : data}}
  }
const JobSingleDynamicV1 = ({dataOL , cookieSend}) => {

  const [idCliente, setIdCliente] = useState( window.localStorage.getItem("token"));
  const [user,setUser] = useState();

console.log({idCliente})
 
  const router = useRouter();
  const [company, setCompany] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setCompany(jobs.find((item) => item.id == id));

   return () => {};
   


  }, [idCliente]);
  return (
    <>
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

     

      <DashboardCandidatesHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Offerta di lavoro" />
          {/* breadCrumb */}

        
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
              <div className="widget-content">

              <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <img src={dataOL?.logo} alt="logo" />
                  </span>
                  <h4 class="m-0">{dataOL?.jobTitle}</h4>
                    <p>Codice Offerta: {dataOL?.codiceJod}</p>
                  <ul className="job-info">
                    <li>
                      <span className="icon flaticon-briefcase"></span>
                      {dataOL?.category}
                    </li>
                    {/* compnay info */}
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {dataOL?.location}
                    </li>
                    {/* location info */}
                    <li>
                      <span className="icon flaticon-clock-3"></span>{" "}
                      {dataOL?.time}
                    </li>
                    {/* time info */}
               {/*      <li>
                      <span className="icon flaticon-money"></span>{" "}
                      {dataOL?.salary}
                    </li> */}
                    {/* salary info */}
                  </ul>
                  {/* End .job-info */}

                  <ul className="job-other-info">
                    {dataOL?.jobType?.map((val, i) => (
                      <li key={i} className={`${val.styleClass}`}>
                        {val.type}
                      </li>
                    ))}
                  </ul>
                  {/* End .job-other-info */}
                </div>
                {/* End .content */}

                <div className="btn-box">
                  <a
                   
                    className="theme-btn btn-style-one"
                    data-bs-toggle="modal"
                    data-bs-target="#applyJobModal"
                  >
                   Candidati all offerta
                  </a>
                {/*   <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                  </button> */}
                </div>
                {/* End apply for job btn */}

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="applyJobModal"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="apply-modal-content modal-content">
                      <div className="text-center">
                        <h3 className="title">Candidati all offerta di lavoro</h3>
                        <button
                          type="button"
                          className="closed-modal"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      {/* End modal-header */}

                      <ApplyJobModalContent idOffer={dataOL} idCliente = {idCliente}  cookieSend = {cookieSend}/>
                      {/* End PrivateMessageBox */}
                    </div>
                    {/* End .send-private-message-wrapper */}
                  </div>
                </div>
                {/* End .modal */}
              </div>
            </div>
            {/* <!-- Job Block --> */}
          </div>
               </div>

               <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <JobDetailsDescriptions />
                {/* End jobdetails content */}

                <div className="other-options">
                  <div className="social-share">
                    <h5>Share this job</h5>
                    <SocialTwo />
                  </div>
                </div>
                {/* <!-- Other Options --> */}

                <div className="related-jobs">
                  <div className="title-box">
                    <h3>Related Jobs</h3>
                    <div className="text">
                      2020 jobs live - 293 added today.
                    </div>
                  </div>
                  {/* End title box */}

                  <RelatedJobs />
                </div>
                {/* <!-- Related Jobs --> */}
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    {/* <!-- Job Overview --> */}
                    <h4 className="widget-title">Dettagli annuncio di lavoro</h4>
                    <JobOverView  dataOL={dataOL}/>

                    {/* <!-- Map Widget --> */}
                    <h4 className="widget-title">Job Location</h4>
                    <div className="widget-content">
                      <div className="map-outer">
                        <div style={{ height: "300px", width: "100%" }}>
                          <MapJobFinder />
                        </div>
                      </div>
                    </div>
                    {/* <!--  Map Widget --> */}

                    <h4 className="widget-title">Job Skills</h4>
                    <div className="widget-content">
                      <JobSkills />
                    </div>
                    {/* <!-- Job Skills --> */}
                  </div>
                  {/* End .sidebar-widget */}

                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      <div className="company-title">
                        <div className="company-logo">
                          <img src={dataOL.logo} alt="resource" />
                        </div>
                        <h5 className="company-name">{dataOL.company}</h5>
                        <a href="#" className="profile-link">
                          View company profile
                        </a>
                      </div>
                      {/* End company title */}

                      <CompnayInfo />

                      <div className="btn-box">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-btn btn-style-three"
                        >
                          {company?.link}
                        </a>
                      </div>
                      {/* End btn-box */}
                    </div>
                  </div>
                  {/* End .company-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
            </div>
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
  
    
    </>
  );
};

export default dynamic(() => Promise.resolve(JobSingleDynamicV1), {
  ssr: false,
});

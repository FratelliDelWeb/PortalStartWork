import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox";
import CopyrightFooter from "../../CopyrightFooter";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";
import { useState } from "react";
import Form from "./components/Form";

const index = ({user , cookie}) => {

  console.log(user)

  

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardCandidatesHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Il mio Account" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row mt-30">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Ciao, ecco le informazioni del tuo account :  {user.username}</h4>
                  </div>
                  <MyProfile user={user} cookie= {cookie}/>
                </div>
              </div>
              {/* <!-- Ls widget --> */}
              <div className="col-lg-12">
               <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title flex-shrink-0">
                  <i className="las la-lock"></i>
                    <h4>Reimposta la tua password</h4>
                    
                  </div>
             
                  <div className="widget-content">
                    <Form />
                  </div>
                </div>


              </div> 
           
 </div>
            {/*   <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Contact Information</h4>
                  </div>
                  {/* End widget-title 
                  <div className="widget-content">
                    <ContactInfoBox user = {user} cookie= {cookie} />
                  </div>
                </div>
              </div> 
               <!-- Ls widget --> */}
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

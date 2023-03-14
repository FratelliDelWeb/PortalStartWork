import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox";
import CopyrightFooter from "../../CopyrightFooter";
import DashboardHeader from "../../../header/DashboardHeader";
import MenuToggler from "../../MenuToggler";
import axios from "axios";
import React, { useState, useEffect } from "react";

import Form from "./components/Form";

const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

const index = ({props,idUser ,cookie}) => {
  console.log("ID USER compoentnIndex=>" , idUser);
  console.log("Cookie compoentnIndex=>", cookie);
  const [user, setUser] = useState()

useEffect(() => {
  callProfile(idUser)
 
},[idUser])

const callProfile = async (id , cookie) =>{
   await axios.get(api + "/users/" + id, {
  withCredentials: true,
  headers: {
    Cookie: cookie,
  },}).then((res)=> {
    const data = res.data;
     setUser(data)
    console.log("data",data)
  })

}

const  setUserIndex =( user) =>{
  setUser(user)
 }
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
          <BreadCrumb title="Profilo" stato="Gestisci le informazioni del tuo account " />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                  <h5>{user?.username} </h5>
                    <p>Codice Candidato :{user?._id}</p>
                  </div>
                   <MyProfile user = {user} cookie={cookie} setUserIndex ={setUserIndex} /> 
                </div>
              </div>
              {/* <!-- Ls widget --> */}
              <div className="col-lg-12">
               <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title flex-shrink-0 justify-content-start">
                  <i className="las la-lock"></i>
                    <h4>Reimposta la tua password</h4>
                    
                  </div>
             
                  <div className="widget-content">
                    <Form />
                  </div>
                </div>


              </div> 
           
             </div>
          {/*     <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Social Network</h4>
                  </div>
                  {/* End widget-title 

                  <div className="widget-content">
                    <SocialNetworkBox />
                  </div>
                </div>
              </div> */}
              {/* <!-- Ls widget --> */}

              {/* <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Contact Information</h4>
                  </div>
                  {/* End widget-title
                  <div className="widget-content">
                    <ContactInfoBox  user ={user} />
                  </div>
                </div>
              </div> */}
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

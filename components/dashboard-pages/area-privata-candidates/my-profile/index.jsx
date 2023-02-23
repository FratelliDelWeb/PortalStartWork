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


const index = ({user}) => {

  console.log(user)

  const [infoEdit, setinfoEdit] = useState({
    id: `${user._id}`,
    age: `${user.age}`,
    candidateID: `${user.candidateID}`,
    gender : `${user.gender}`,
    mansione: `${user.mansione}`,
    name: `${user.name}`,
    surname: `${user.surname}`,
    note: `${user.note}`,
    status: `${user.status}` ,
    skills: `${user.skills}` ,
    rangeWithin: `${user.rangeWithin}` ,
    languages:  `${user.languages}` ,
    });

    const setEditData = (user ,infoEdit ) => {

      let  eitData= {
         "id": user._id,
         "fields" : [
           {
             "name" : "name",
             "from" : user.name,
             "to" : infoEdit.name,
           },
           {
            "name" : "surname",
            "from" : user.surname,
            "to" : infoEdit.surname,
          },
         {
           "name" : "email",
           "from" : user.email,
           "to" : infoEdit.email,
         },
         {
         "name" : "phone",
         "from" : user.phone,
         "to" : infoEdit.phone,
       },
       {
        "name" : "role",
        "from" : user.role,
        "to" : infoEdit.role,
      },
      {
        "name" : "status",
        "from" : user.status,
        "to" : infoEdit.status,
      }, 
      {
        "name" : "mansione",
        "from" : user.mansione,
        "to" : infoEdit.mansione,
      },
     
      ]
       };
       console.log(eitData);
       editCliente(eitData);
       
     }

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
          <BreadCrumb title="My Profile!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Il mio profilo  {user.name} {user.surname}</h4>
                  </div>
                  <MyProfile />
                </div>
              </div>
              {/* <!-- Ls widget --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Social Network</h4>
                  </div>
                  {/* End widget-title */}

                  <div className="widget-content">
                    <SocialNetworkBox />
                  </div>
                </div>
              </div>
              {/* <!-- Ls widget --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Contact Information</h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <ContactInfoBox />
                  </div>
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

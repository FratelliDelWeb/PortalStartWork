import MobileMenu from "../../../header/MobileMenu";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import JobListingsTable from "./components/JobListingsTable";
import MenuToggler from "../../MenuToggler";
import { useState, useEffect } from "react";
const index = ({dataOL, userinterstedTo }) => {
/* console.log(dataOL);
console.log(userinterstedTo); */
  const [userOffer, setUserOffer] = useState()
  const [checkOffer,setCechkOffer] = useState()

  useEffect(() => {
    DataToSend(dataOL ,userinterstedTo );
   
   }, [userinterstedTo])

    const DataToSend = async (dataOL ,userinterstedTo ) =>{



      let leaderPhotos = [];

      for(let i = 0; i < dataOL.length; i++) {
        if(dataOL[i]._id === userinterstedTo[i]) {
          leaderPhotos.push(dataOL[i]);
        }
      }
    
     
      setUserOffer(leaderPhotos)
      setCechkOffer(dataOL.length)
/*       console.log("lista da monstare ", userOffer)
 */    }
 
 
 
  
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
          <BreadCrumb title="Candidature Effettuate" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobListingsTable  dataOL={userOffer} />
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

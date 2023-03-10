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
    console.log(userinterstedTo)
    if(userinterstedTo){
  /*     DataToSend(dataOL ,userinterstedTo ); */
      findCommonElement(dataOL, userinterstedTo)
    }   
   }, [userinterstedTo])

    const DataToSend = async (dataOL ,userinterstedTo ) =>{
      let leaderPhotos = []; 
      for(let i = 0; i < dataOL.length; i++) {
        console.log(dataOL[i]._id , userinterstedTo[i])
          if(dataOL[i]._id === userinterstedTo[i]) {
            leaderPhotos.push (userinterstedTo[i]);
            console.log("array" ,leaderPhotos)
          }
          console.log("array" ,leaderPhotos) 
       
      }
      setUserOffer(leaderPhotos)
      console.log(userOffer)
      setCechkOffer(dataOL.length)
/*       console.log("lista da monstare ", userOffer)
 */ }
 
 const  findCommonElement = async (dataOL, userinterstedTo) => {
  let leaderPhotos = []; 
  for(let i = 0; i < dataOL.length; i++) {
      for(let j = 0; j < userinterstedTo.length; j++) {
           console.log(dataOL[i]._id);
           
           console.log(userinterstedTo[j] );
           console.log(userinterstedTo.length)
          if(dataOL[i]._id === userinterstedTo[j]) {
            console.log( "nuovo metodo",dataOL[i]._id , userinterstedTo[j] )
              // Return if common element found
              console.log("pust to array ",userinterstedTo[j])
              leaderPhotos.push(dataOL[i]);
           
          }
      }
      setUserOffer(leaderPhotos)
      console.log("ARRAY",leaderPhotos)
  }

  
  console.log("ARRAY",leaderPhotos)
  setCechkOffer(dataOL.length)
   console.log(userOffer) 
  // Return if no common element exist
  return false;
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
          <div className=" upper-title-box">
          <h3>CANDDIDATURE EFFETTUATE</h3>
           <h6>Scopri e visualizza tutte le candidature inviate da te ,puoi filtrarle e scoprire il loro stato attuale.</h6>
          </div>
          
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

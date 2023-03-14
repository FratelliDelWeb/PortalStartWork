import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import TopCardBlock from "./components/TopCardBlock";
import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";
import CopyrightFooter from "../../CopyrightFooter";
import JobApplied from "./components/JobApplied";
import DashboardHeader from "../../../header/DashboardHeader";
import MenuToggler from "../../MenuToggler";
import { useState , useEffect } from "react";
import axios from "axios";
import { CircularProgressbar ,buildStyles} from "react-circular-progressbar";

const api = process.env.NEXT_PUBLIC_API_ENDPOINT;

const Index = ({dataOL,idUser,cookie}) => {
  console.log("ID USER compoentnIndex=>" , idUser);
  console.log("Cookie compoentnIndex=>", cookie);
  const [user, setUser] = useState()

useEffect(() => {
  callProfile(idUser)
 
},[idUser])
const callProfile = async (id , cookie) =>{
  await axios.get(api + "/candidates/" + id, {
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
       

        <BreadCrumb title={ `Benventuo ,${user?.name} ${user?.surname} !`} stato={`La tua professione: ${user?.mansione}`} />
 
      
  
   
         {/* breadCrumb */}
          
          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
      {/*     <div className="col-2">
           <div className="">
           <h6>Completamento profilo</h6>
                    <p >
                        `Inserisci tutte le informazioni richeiste nel <strong>tuo CV</strong>
                        per raggiungere il  <strong>100%</strong>`
                    </p>
                    <div style={{ width: 100, height: 100, margin: "auto" }}>
                        <CircularProgressbar
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#7367F0",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent",
                            })}
                            value="30"
                            text={`30%`}
                        />
                    </div>{" "}
                    
                </div> 
           </div> */}
            <div className="col-12">
            <TopCardBlock user={user} />
            </div>
          
          </div>
          {/* End .row top card block */}

          <div className="row">
            
          <div className="col-lg-12">
              {/* <!-- applicants Widget --> */}
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <h4>Nuove Offerte di lavoro</h4>
                </div>
                <div className="widget-content">
                  <div className="row">
                    {/* <!-- Candidate block three --> */}

                    <JobApplied dataOL={dataOL}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              {/* <!-- Graph widget --> */}
              <div className="graph-widget ls-widget">
                <ProfileChart />
              </div>
              {/* End profile chart */}
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-12">
              {/* <!-- Notification Widget --> */}
              <div className="notification-widget ls-widget">
                <div className="widget-title">
                  <h4>Notifiche</h4>
                </div>
                <div className="widget-content">
                  <Notification />
                </div>
              </div>
            </div>
            {/* End .col */}

            {/* End .col */}
          </div>
          {/* End .row profile and notificatins */}
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

export default Index;

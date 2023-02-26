import { useState } from "react";


const TopCardBlock = ({dataCL}) => {


const [allCandidates,setallCandidates] =useState(dataCL); 
const [approved,setApproved] =useState(dataCL.filter(function (el) { return el.status === "approved" }));
const [delated,setDelated] =useState(dataCL.filter(function (el) { return el.status === "delate" }));
const [waiting,setWaitng] =useState(dataCL.filter(function (el) { return el.status === "waiting" }));
const [added,setAdded] =useState(dataCL.filter(function (el) { return el.status === "new" }));





  const cardContent = [
    {
      id: 1,
      icon: "la-user-check",
      countNumber: approved.length,
      metaName: "Candidati approvati",
      uiClass: "ui-green",
    },
    {
      id: 3,
      icon: "la-user-clock",
      countNumber: waiting.length,
      metaName: "Candidati in attesa ",
      uiClass: "ui-yellow",
    },
    {
      id: 4,
      icon: "la-user-slash",
      countNumber: delated.length,
      metaName: "Candidati Scartati",
      uiClass: "ui-red",
    },
    {
      id: 5,
      icon: "la-user-clock",
      countNumber: allCandidates.length,
      metaName: "Candidati totali",
      uiClass: "ui-blue",
    },
  ];

  return (
    <>
      {cardContent.map((item) => (
        <div
          className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-6"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon la ${item.icon}`}></i>
            </div>
            <div className="right">
              <h4>{item.countNumber}</h4>
              <p>{item.metaName}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCardBlock;

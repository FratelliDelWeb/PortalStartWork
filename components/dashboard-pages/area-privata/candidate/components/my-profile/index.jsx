import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";
import { useState,useEffect } from "react";
const index = ({props,cand,cookie,setCandidato}) => {
  console.log("id candidato page  ",cand);
  console.log("cookie candidato page  ",cookie)
  const [candidate, setCandidate] = useState()

  useEffect(() => {
    setCandidate(cand)
    console.log(candidate)
  },[cand])

 const  setCandidatoEditato =( cand) =>{
  setCandidate(cand)
  setCandidato(cand)
 }
  return (
    <div className="widget-content">
     {/*  <LogoUpload /> */}
      {/* End logo and cover photo components */}
       <FormInfoBox cand={candidate} cookie={cookie} setCandidatoEditato={setCandidatoEditato} />  
      {/* compnay info box */}
    </div>
  );
};

export default index;

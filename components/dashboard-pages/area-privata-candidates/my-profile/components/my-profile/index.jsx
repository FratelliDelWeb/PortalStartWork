import { useEffect } from "react";
import { useState } from "react";
import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";

const index = ({props,user,cookie ,setUserIndex}) => {

  console.log("USER compoentnIndex22=>" , user);
  console.log("Cookie compoentnIndex222=>", cookie);

  const [userSend , setUser] = useState()
  useEffect(()=>{
setUser(user)
  },[user])


 const  setUserEditato =( user) =>{
  setUser(user)
  setUserIndex(user)
 }
  return (
    <div className="widget-content">
 {/*      <LogoUpload /> */}
      {/* End logo and cover photo components */}
         <FormInfoBox user={userSend} cookie={cookie} setUserEditato ={setUserEditato}/>   
      {/* compnay info box */}
    </div>
  );
};

export default index;

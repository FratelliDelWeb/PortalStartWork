import { useState,useEffect } from "react";
import axios from "axios"
import { useRouter } from "next/router";
import {modifyUser} from "../../../../../services/private/modifyUser";
import Loader from "../../../../loader/Loader";
const Form = ({props,user ,cookie , setUserEditato}) => {
  
  console.log(" USER compoentnBOX =>" , user);
  console.log("Cookie compoentnBOX=>", cookie);


  const router = useRouter();
  const [cookieToSend,setcookieToSend]= useState(cookie);
  const [statoEdit,setStatoEdit] = useState("start");


  const [userToUse , setUserData ] = useState();



  const [ClienteEdit, setClienteEdit] = useState();

  console.log("USERT TO START EDIT" ,ClienteEdit)
  console.log("startCookie" ,cookieToSend);
  useEffect(() => {
    setUserData({ id: `${user?._id}`,
     
      password: `${user?.password}`,
      });
      setClienteEdit( {
        id: `${user?._id}`,
      
        password: `${user?.password}`,
     
        })
      },[user])
      const setEditData = (userToUse ,ClienteEdit ) => {

        let  editData= {
           "id": userToUse?._id,
           "fields" : [
             {
               "name" : "password",
               "from" : userToUse?.password,
               "to" : ClienteEdit?.password,
             },
       
        ]
         };
  
         console.log(editData)
          editCliente(editData,cookie)
        
         
       } 

           
    const editCliente = async (editData,cookieToSend) => {
      console.log(cookieToSend)
      console.log("dati editatiToModify" ,editData);
     const res = await modifyUser(editData,cookieToSend).then( (res) =>
   {   console.log(res)
       const message = res.message;
   console.log(message)
   if(message == "Update successful"){
    
    setStatoEdit("ok")
    console.log("RESPONSEEE",res.client)
    const clientEditato = res.client;
    setUserEditato(clientEditato)
   console.log("originale",user) }})} 
   const handleSubmit = function (e,user) {
    setStatoEdit("loading")
    e.preventDefault();
    setEditData(user,ClienteEdit)
   

  }

  return (
    <form  onSubmit={(e) => handleSubmit(e,user)} method="POST" className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Vecchia Password</label>
          <input type="password" name="name" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Nuova Password</label>
          <input type="password" name="name" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Conferma Password</label>
          <input type="password" name="name" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Aggiorna
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

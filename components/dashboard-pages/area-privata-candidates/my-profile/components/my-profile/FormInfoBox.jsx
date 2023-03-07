import Select from "react-select";
import { useState,useEffect } from "react";
import axios from "axios"
import { useRouter } from "next/router";
import {modifyUser} from "../../../../../../services/private/modifyUser";
import Loader from "../../../../../loader/Loader";
const FormInfoBox = ({props,user ,cookie , setUserEditato}) => {

  
  console.log(" USER compoentnBOX =>" , user);
  console.log("Cookie compoentnBOX=>", cookie);


  const router = useRouter();
  const [cookieToSend,setcookieToSend]= useState(cookie);
  const [statoEdit,setStatoEdit] = useState("start");


  const [userToUse , setUserData ] = useState();

  useEffect(() => {
setUserData({ id: `${user?._id}`,
  username: `${user?.username}`,
  email: `${user?.email}`,
  role : `${user?.role}`});
  setClienteEdit( {
    id: `${user?._id}`,
    username: `${user?.username}`,
    email: `${user?.email}`,
    role : `${user?.role}`
    })
  },[user])


  console.log("USER DA USARE " , userToUse)


    const [ClienteEdit, setClienteEdit] = useState();

    console.log("USERT TO START EDIT" ,ClienteEdit)
    console.log("startCookie" ,cookieToSend);
 
/* 
    const setEditData = (user ,ClienteEdit ) => {

   
       console.log("dati editati" ,ClienteEdit);
  debugger
       
       editCliente(ClienteEdit,cookieToSend);
       
     } */
    const setEditData = (userToUse ,ClienteEdit ) => {

      let  editData= {
         "id": userToUse?._id,
         "fields" : [
           {
             "name" : "username",
             "from" : userToUse?.username,
             "to" : ClienteEdit?.username,
           },
          
         {
           "name" : "email",
           "from" : userToUse?.email,
           "to" : ClienteEdit?.email,
         },
         {
         "name" : "role",
         "from" : userToUse?.role,
         "to" : ClienteEdit?.role,
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


  const roleUser = [
    { value: "admin", label: "AMMINISTRATORE" },
    { value: "Basic", label: "OPERATORE" },
    { value: "candidate", label: "CANDIDATO" },
  ];


  const handleSubmit = function (e,user) {
    setStatoEdit("loading")
    e.preventDefault();
    setEditData(user,ClienteEdit)
   

  }


  
  return (
    <form  onSubmit={(e) => handleSubmit(e,user)} method="POST" className="default-form">
      {statoEdit === "ok" ? (<><h2> Modifica Effettuata</h2><button href="area-privata/my-profile" onClick={(setStatoEdit("start"))}>TORNA AL PROFILO</button></> ) : (<> 
       
          <div className="row">
          {statoEdit === "loading" ? (<><h4>Stiamo inviando le tue modifiche </h4><Loader></Loader></>) : (<>      {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Username</label>
          <input   onChange={(e) => setClienteEdit({ ...ClienteEdit,username: e.target.value })} type="text" name="username" placeholder={userToUse?.username}   required />
      </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email</label>
          <input type="email" name="email"    onChange={(e) => setClienteEdit({ ...ClienteEdit,email: e.target.value })} placeholder={user?.email} defaultValue={user?.email}  required/>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Codice utente </label>
          <input
            type="text"
            name="name"
            placeholder={userToUse?.id}
            defaultValue={userToUse?.id} 
            onChange={(e) => setClienteEdit({ ...ClienteEdit,id: e.target.value })} 
          />
        </div>
 {/* <!-- Search Select --> */}
 <div className="form-group col-lg-6 col-md-12">
          <label>Ruolo </label>
          <Select
            defaultValue={userToUse?.role}
            onChange={(e) => setClienteEdit({ ...ClienteEdit,role: e.value })}  
            name="colors"
            options={roleUser}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div> 


        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Salva
          </button>
        </div></>)}
      
      
      </div></>)
      
      }
   
    </form>
  );
};

export default FormInfoBox;

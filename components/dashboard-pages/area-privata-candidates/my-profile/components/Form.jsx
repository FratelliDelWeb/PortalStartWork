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

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [ClienteEdit, setClienteEdit] = useState();
   const [errorSend, setErrorSend] = useState("errore");
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState({
    name: ``,
    surname: ``,
    phone: ``,
    age: ``,
    rangeWithin: ``,
    gender: ``,
    password: ``,
    confirmPassword: ``,
    location: ``,
  });
  console.log("USERT TO START EDIT" ,ClienteEdit)
  console.log("startCookie" ,cookieToSend);
  useEffect(() => {
    setUserData({ id: `${user?._id}`,
     
      password: `${user?.password}`,
      });
      setClienteEdit( {
        id: `${user?._id}`,
        password: `${user?.password}`,
        confirmPassword: `${user?.password}`,
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
  const validateInput = (e) => {
   
    let { name, value } = e.target;
    console.log( name, value );
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "confirmPassword":
          if (ClienteEdit.password !== ClienteEdit.confirmPassword) {
            stateObj[name] = "Le password non coincidono";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }
  return (
    <form  onSubmit={(e) => handleSubmit(e,user)} method="POST" className="default-form">

      {statoEdit === "ok" ? (<><h2> Modifica Effettuata</h2><button href="area-privata/my-profile" onClick={(setStatoEdit("start"))}>TORNA AL PROFILO</button></> ) : (<> 
       
       <div className="row">
       {statoEdit === "loading" ? ( <div className="align-items-center flex-column d-block d-flex flex-wrap justify-content-center">
          <div> <Loader></Loader></div>
       <div className="mt-1"> <h5>Stiamo inoltrando le tue modifiche...</h5></div>
   
      
     </div>) : (<>       
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>UserId</label>
          <input type="text" name="userID" placeholder={user?._id} disabled />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label> Username</label>
          <input type="text" name="username" disabled  placeholder= {user?.username}/>
        </div>

        {/* <!-- Input --> */}
        <div className="col-6 mt-20">
                <div className="form-group">
                  <label>Nuova Password</label>
                  <input
                    type={passwordType}
                    name="password"
                    className={error.password ? "errorInput" : ""}
                    placeholder="Password"
                    required
                     onBlur={(e) => validateInput(e)}
                    onChange={(e) => setClienteEdit({ ...ClienteEdit,password: e.target.value })}
                   
                  />
                  <span className="p-viewer2" onClick={togglePassword}>
                    {passwordType === "password" ? (
                      <i className="fa fa-eye"></i>
                    ) : (
                      <i className="fa fa-eye-slash"></i>
                    )}
                  </span>
                </div>

                {error.password && (
                  <span className="err">{error.password}</span>
                )}
              </div>

              <div className="col-6 mt-20">
                <div className="form-group">
                  <label>Conferma passsword</label>
                  <input
                    id="sesso-field"
                    type="password"
                    name="confirmPassword"
                    placeholder="Conferma passsword"
                    onBlur={(e) => validateInput(e)}
                    className={error.confirmPassword ? "errorInput" : ""}
                    onChange={(e) => setClienteEdit({ ...ClienteEdit,confirmPassword: e.target.value })}
                    
                    required
                  />
                </div>
                {error.confirmPassword && (
                  <span className="err">{error.confirmPassword}</span>
                )}
              </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Aggiorna
          </button>
        </div>
      </div></>)}
   
   
   </div></>)}
    </form>
  );
};

export default Form;

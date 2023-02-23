import Select from "react-select";
import { useState } from "react";
import axios from "axios"
import {modifyJob} from "../../../../../../services/private/modifyJob";



const FormInfoBox = ({user ,cookie}) => {
 
  const [ClienteEdit, setClienteEdit] = useState({
    id: `${user._id}`,
    username: `${user.username}`,
    email: `${user.email}`,
    role : `${user.role}`
    });

    console.log(ClienteEdit)

    const setEditData = (user ,ClienteEdit ) => {

      let  editData= {
         "id": user._id,
         "fields" : [
           {
             "name" : "username",
             "from" : user.username,
             "to" : ClienteEdit.username,
           },
          
         {
           "name" : "email",
           "from" : user.email,
           "to" : ClienteEdit.email,
         },
         {
         "name" : "role",
         "from" : user.role,
         "to" : ClienteEdit.role,
       },
     
      ]
       };
        editCliente(editData,cookie)
      
       
     }

     const editCliente = async (editData,cookie) => {
      console.log(cookie)
      console.log(editData)
     const res =  modifyJob(editData,cookie)
       
       
     }

  const roleUser = [
    { value: "Admin", label: "AMMINISTRATORE" },
    { value: "Operator", label: "OPERATORE" },
    { value: "Candidate", label: "CANDIDATO" },
  ];



  const handleSubmit = function (e) {
    e.preventDefault();
    setEditData(user,ClienteEdit)
   

  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} method="POST" className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Username</label>
          <input  onChange={(e) => setClienteEdit({ ...ClienteEdit,username: e.target.value })} type="text" name="username" placeholder={user?.username}  defaultValue={user?.username} required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email</label>
          <input onChange={(e) => setClienteEdit({ ...ClienteEdit,email: e.target.value })}  type="text" name="email" placeholder={user?.email} defaultValue={user?.email}  required/>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Codice utente </label>
          <input
            type="text"
            name="name"
            placeholder={user._id}
            defaultValue={user?._id} 
          />
        </div>

    

        {/* <!-- Search Select --> */}
       <div className="form-group col-lg-6 col-md-12">
       <label>Ruolo</label>
                   <select
                     value={user.role}
                     className= " chosen-single form-select"
                      
                     onChange={(e) =>
                      setClienteEdit({ ...ClienteEdit, role: e.target.value })
                     }
                     required
                   >
                     <option>AMMINISTRATORE</option>
                     <option>CANDIDATO</option>
                     <option>OPERATORE</option>
                   </select>
        </div> 

    

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;

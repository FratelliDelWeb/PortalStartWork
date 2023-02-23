import Select from "react-select";
import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/router";

const FormInfoBox = ({user}) => {

  const router = useRouter();
  const [ClienteEdit, setClienteEdit] = useState({
    id: `${user._id}`,
    username: `${user.username}`,
    email: `${user.email}`,
    role : `${user.role}`
    });

    console.log(ClienteEdit)
    const setEditData = (user ,ClienteEdit ) => {

      let  eitData= {
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
       console.log(eitData);
       editCliente(eitData);
       
     }

  const roleUser = [
    { value: "Admin", label: "AMMINISTRATORE" },
    { value: "Operator", label: "OPERATORE" },
    { value: "Candidate", label: "CANDIDATO" },
  ];


  const handleSubmit = function (e,user) {
    e.preventDefault();
    setEditData(user,ClienteEdit)
    editCliente(ClienteEdit);

  }


  
  return (
    <form  onSubmit={(e) => handleSubmit(e)} method="POST" className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Username</label>
          <input  onChange={(e) => setClienteEdit({ ...ClienteEdit,username: e.target.value })} type="text" name="username" placeholder={user?.username}  value={ClienteEdit?.username} required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email</label>
          <input type="text" name="email"  placeholder={user?.email} defaultValue={user?.email}  required/>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Codice utente </label>
          <input
            type="text"
            name="name"
            placeholder={user._id}
            defaultValue={user?._id} 
            onChange={(e) => setClienteEdit({ ...ClienteEdit,_id: e.target.value })}
          />
        </div>
 {/* <!-- Search Select --> */}
 <div className="form-group col-lg-6 col-md-12">
          <label>Ruolo </label>
          <Select
            defaultValue={ClienteEdit.role}
          
            name="colors"
            options={roleUser}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div> 


        {/* <!-- Input --> */}
     {/*    <div className="form-group col-lg-6 col-md-12">
          <label>Allow In Search & Listing</label>
          <select className="chosen-single form-select" required>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div> */}

        {/* <!-- About Company --> */}
     {/*    <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div> */}

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

import Select from "react-select";
import { useState } from "react";

const FormInfoBox = ({user}) => {
  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];


  const [infoEdit, setinfoEdit] = useState({
    id: `${user._id}`,
    age: `${user.age}`,
    candidateID: `${user.candidateID}`,
    gender : `${user.gender}`,
    mansione: `${user.mansione}`,
    name: `${user.name}`,
    surname: `${user.surname}`,
    note: `${user.note}`,
    status: `${user.status}` ,
    skills: `${user.skills}` ,
    rangeWithin: `${user.rangeWithin}` ,
    languages:  `${user.languages}` ,
    });

    const setEditData = (user ,infoEdit ) => {

      let  eitData= {
         "id": user._id,
         "fields" : [
           {
             "name" : "name",
             "from" : user.name,
             "to" : infoEdit.name,
           },
           {
            "name" : "surname",
            "from" : user.surname,
            "to" : infoEdit.surname,
          },
         {
           "name" : "email",
           "from" : user.email,
           "to" : infoEdit.email,
         },
         {
         "name" : "phone",
         "from" : user.phone,
         "to" : infoEdit.phone,
       },
       {
        "name" : "role",
        "from" : user.role,
        "to" : infoEdit.role,
      },
      {
        "name" : "status",
        "from" : user.status,
        "to" : infoEdit.status,
      }, 
      {
        "name" : "mansione",
        "from" : user.mansione,
        "to" : infoEdit.mansione,
      },
     
      ]
       };
       console.log(eitData);
       editCliente(eitData);
       
     }

  return (
    <form action="#" className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Jerome" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Job Title</label>
          <input type="text" name="name" placeholder="UI Designer" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="name"
            placeholder="0 123 456 7890"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email address</label>
          <input
            type="text"
            name="name"
            placeholder="creativelayers"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Website</label>
          <input
            type="text"
            name="name"
            placeholder="www.jerome.com"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Current Salary($)</label>
          <select className="chosen-single form-select" required>
            <option>40-70 K</option>
            <option>50-80 K</option>
            <option>60-90 K</option>
            <option>70-100 K</option>
            <option>100-150 K</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Expected Salary($)</label>
          <select className="chosen-single form-select" required>
            <option>120-350 K</option>
            <option>40-70 K</option>
            <option>50-80 K</option>
            <option>60-90 K</option>
            <option>70-100 K</option>
            <option>100-150 K</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <input type="text" name="name" placeholder="5-10 Years" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Age</label>
          <select className="chosen-single form-select" required>
            <option>23 - 27 Years</option>
            <option>24 - 28 Years</option>
            <option>25 - 29 Years</option>
            <option>26 - 30 Years</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Education Levels</label>
          <input type="text" name="name" placeholder="Certificate" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Languages</label>
          <input
            type="text"
            name="name"
            placeholder="English, Turkish"
            required
          />
        </div>

        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Categories </label>
          <Select
            defaultValue={[catOptions[1]]}
            isMulti
            name="colors"
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Allow In Search & Listing</label>
          <select className="chosen-single form-select" required>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
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

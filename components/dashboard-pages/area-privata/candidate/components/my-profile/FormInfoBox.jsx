import Select from "react-select";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import InputRange from "react-input-range";
import Education from "./Education";
import Map from "../../../../Map";
import AwardsCertificates from "./AwardsCertificates";
import Experience from "./Experience";
import Loader from "../../../../../loader/Loader";
import { useEffect } from "react";
import {modifyCandidates} from "../../../../../../services/private/modifyCandidates";

const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
const FormInfoBox = ({props,cand,cookie,setCandidatoEditato}) => {


  console.log(" USER compoentnBOX =>" , cand);
  console.log("Cookie compoentnBOX=>", cookie);

  const [cookieToSend,setcookieToSend]= useState(cookie);

  const router = useRouter();

 

  const [candidateToUseSend, setCandidateToUseSend] = useState();
  const [statoEdit,setStatoEdit] = useState("start");

  const [candidateEdit, setCandidateEdit] = useState();
  const [candidateToUse , setCandidateToUse ] = useState();

  const [getDestination, setDestination] = useState({min: 0,max: 100,});



  const handleOnChange = (value) => {
    setDestination(value);
    setCandidateToUse({ ...candidateToUse, rangeWithin: value.max });
  };


  
  useEffect(() => {
  setCandidateToUse({ id: `${cand?._id}`,
  surname: `${cand?.surname}`,
  /* email: `${cand?.email}`, */
/*   role : `${cand?.role}`,
 */  status:`${cand?.status}`,
  name:`${cand?.name}`,

  mansione:`${cand?.mansione}`,
  phone:`${cand?.phone}`,
  note:`${cand?.note}`,
  publicName:`${cand?.publicName}`,
  gender:`${cand?.gender}`,
  category:`${cand?.category}`,
  age:`${cand?.age}`,
  skills:`${cand?.skills}`,
  educazione:`${cand?.educazione}`,
});
  setCandidateEdit({ id: `${cand?._id}`,
  surname: `${cand?.surname}`,
/*   email: `${cand?.email}`, */
 /*  role : `${cand?.role}`, */
  status:`${cand?.status}`,
  name:`${cand?.name}`,
  mansione:`${cand?.mansione}`,
  phone:`${cand?.phone}`,
  note:`${cand?.note}`,
  publicName:`${cand?.publicName}`,
  gender:`${cand?.gender}`,
  category:`${cand?.category}`,
  age:`${cand?.age}`,
  skills:`${cand?.skills}`,
});
  },[cand])


  console.log("USER DA USARE " , candidateToUse)

  const setEditData = (candidateToUse ,candidateEdit ) => {

    let  editData= {
       "id": candidateToUse?._id,
       "fields" : [
         {
           "name" : "surname",
           "from" : candidateToUse?.surname,
           "to" : candidateEdit?.surname,
         },

       {
       "name" : "name",
       "from" : candidateToUse?.name,
       "to" : candidateEdit?.name,
     },
      {
       "name" : "mansione",
       "from" : candidateToUse?.mansione,
       "to" : candidateEdit?.mansione,
     },
     {
      "name" : "note",
      "from" : candidateToUse?.note,
      "to" : candidateEdit?.note,
    },
    {
      "name" : "phone",
      "from" : candidateToUse?.phone,
      "to" : candidateEdit?.phone,
    },
    {
      "name" : "age",
      "from" : candidateToUse?.age,
      "to" : candidateEdit?.age,
    },
    {
      "name" : "gender",
      "from" : candidateToUse?.gender,
      "to" : candidateEdit?.gender,
    },  {
      "name" : "category",
      "from" : candidateToUse?.category,
      "to" : candidateEdit?.category,
    },
    ]
     };

     console.log(editData)
     editCandidate(editData,cookie)
    
     
   } 



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
  const [errorSend, setErrorSend] = useState("errore");
  const [passwordType, setPasswordType] = useState("password");


 /*  const setEducazioneToSend = (educazione) => {
    setCandidateToUse({ ...candidateToUse, educazione: educazione });
    console.log(candidateToUse?.educazione);
  };
  const setPremiCertificatiToSend = (premi) => {
    setCandidateToUse({ ...candidateToUse, premi: premi });
    console.log(candidateToUse?.premi);
  }; 
  const setEsperienzeToSend = (esperienze) => {
    setCandidateToUse({ ...candidateToUse, esperienze: esperienze });
    console.log(candidateToUse?.esperienze);
  };  */
const setArrayLinguagesToPush = (e) =>{
  let newArry = []
  for(var lingue  of e  ){
    newArry.push(lingue.value);
  }
  console.log(newArry);
  setCandidateEdit({ ...candidateEdit, languages: newArry });
  console.log(candidateToUse)

}
const editCandidate = async (candidateEdit,cookieToSend) => {
  console.log(cookieToSend)
  console.log("dati editatiToModify" ,candidateEdit);
 const res = await modifyCandidates(candidateEdit,cookieToSend).then( (res) =>
{   console.log(res)
   const message = res.message;
console.log(message)
if(message == "Update successful"){

setStatoEdit("ok")
console.log("RESPONSEEE",res.client)
const candidatoEditato = res.client;
 setCandidatoEditato(candidatoEditato) 
console.log("originale",cand) }})} 

const setArraySkillsToPush = (e) =>{
  let newArry = []
  for(var skill  of e  ){
    newArry.push(skill.value);
  }
  console.log(newArry);
  setCandidateEdit({ ...candidateEdit, skills: newArry });
  console.log(candidateToUse)
}
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const validateInput = (e) => {
    console.log(candidateToUse);
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "name":
          if (!value) {
            stateObj[name] = "Per favore inserire il nome.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };
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

  const lingue = [
    { value: "Italiano", label: "Italiano" },
    { value: "Inglese", label: "Inglese" },
    { value: "Spagnolo", label: "Spagnolo" },
    { value: "Tedesco", label: "Tedesco" },
    { value: "Cinese", label: "Cinese" },
  
  ];
  const skills = [
    { value: "Programmazione", label: "Programmazione" },
    { value: "Web", label: "Web" },
    { value: "Medicina", label: "Medicina" },
    { value: "Soport", label: "Sport" },
    { value: "Musica", label: "Musica" },
    { value: "Scrittura", label: "Scrittura" },
    { value: "Probelm Solving", label: "Probelm Solving" },
  
  ];
  const handleSubmit = function (e,can) {
    setStatoEdit("loading")
    e.preventDefault();
    setEditData(can,candidateEdit)
   

  }
  return (
    <form
      method="POST"
      onSubmit={(e) => handleSubmit(e, cand)}
      className="default-form"
    >
   {candidateToUseSend === "ok" ? (<div>
<h1>Modificato</h1>
 </div>) : (<div>


  {candidateToUseSend !== "send" ? (
      <div className="row">
        
        <div className="col-6 mt-20">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              id="name-field"
            
              defaultValue={candidateToUse?.name}
             
              onChange={(e) => setCandidateEdit({ ...candidateEdit,name: e.target.value })}
              
            />
          </div>

          {error.name && <span className="err">{error.name}</span>}
        </div>

        <div className="col-6 mt-20">
          <div className="form-group">
            <label>Cognome</label>
            <input
              id="surname-field"
              className={error.surname ? "errorInput" : ""}
              type="text"
              name="surname"
              defaultValue={candidateToUse?.surname}
              placeholder="Cognome"
              onBlur={(e) => validateInput(e)}
              onChange={(e) => setCandidateEdit({ ...candidateEdit,surname: e.target.value })}

            />
          </div>
        </div>
        <div className="col-6 mt-20">
          <div className="form-group">
            <label>Telefono</label>
            <input
              id="phone-field"
              className={error.phone ? "errorInput" : ""}
              type="text"
              name="phone"
              placeholder="Telefono"
              value={candidateToUse?.phone}
              onBlur={(e) => validateInput(e)}
              onChange={(e) => setCandidateEdit({ ...candidateEdit,phone: e.target.value })}

              required
            />
          </div>
        </div>
    {/*     <div className="col-6 mt-20">
          <div className="form-group">
            <label>Email</label>
            <input
              id="email-field"
              type="email"
              name="email"
              placeholder="Email"
              className={error.email ? "errorInput" : ""}
              value="emai@emial.it"
              onBlur={(e) => validateInput(e)}
              onChange={(e) =>
                setCandidateToUse((candidateToUse) => ({
                  ...candidateToUse,
                  credentials: {
                    ...candidateToUse?.credentials,
                    email: e.target.value,
                  },
                }))
              }
            />
          </div>
        </div> */}

        <div className="col-6 mt-20">
          <div className="form-group">
            <label>Età</label>
            <input
              type="number"
              name="age"
              placeholder={candidateEdit?.age}
              id="age-field"
              className={error.age ? "errorInput" : ""}
              onBlur={(e) => validateInput(e)}
              value={candidateEdit?.age}
              onChange={(e) => setCandidateEdit({ ...candidateEdit, age: e.target.value })}
            
            />
          </div>
        </div>

        <div className="col-6 mt-20">
          <div className="form-group">
            <label>Sesso</label>
            <select
              onBlur={(e) => validateInput(e)}
              value={candidateEdit?.gender}
              className={
                error.gender
                  ? "errorInput chosen-single form-select"
                  : "chosen-single form-select"
              }
              onChange={(e) =>
                setCandidateEdit({ ...candidateEdit, gender: e.target.value })
              }
              required
            >
              <option>M</option>
              <option>F</option>
              <option>Preferisco non rispondere</option>
            </select>
          </div>
        </div>

        <div className="col-6 mt-20">
          <div className="form-group">
            <label>Mansione</label>
            <input
              value={candidateEdit?.mansione}
              onBlur={(e) => validateInput(e)}
              className={error.mansione ? "errorInput" : ""}
              onChange={(e) =>
                setCandidateEdit({ ...candidateEdit, mansione: e.target.value })
              }
              id="Mansione-field"
              type="text"
              name="mansione"
              placeholder="Mansione"
            />
          </div>
        </div>

        <div className="col-6
         mt-20">


        <div className="form-group">
            <label>Categoria</label>
           
<select
              onBlur={(e) => validateInput(e)}
              value={candidateEdit?.category}
              className={
                error.gender
                  ? "errorInput chosen-single form-select"
                  : "chosen-single form-select"
              }
              onChange={(e) =>
                setCandidateEdit({ ...candidateEdit, category: e.target.value })
              }
              name="category"
              placeholder= {candidateEdit?.category}
              required
            >
              <option>Industriale</option>
              <option>Informatica</option>
              <option>Medico Sanitario</option>
              <option>Commerciale</option>
            </select>
          </div>

          </div>



  {/* <!-- Search Select --> */}
  <div className="col-lg-6 col-md-12">



  <div className="form-group ">
          <label>Lingue parlate </label>
          <Select
            defaultValue={[lingue[2]]}
            isMulti
            name="colors"
            options={lingue}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setArrayLinguagesToPush(e)}
          />
          
        </div>




  </div>

  {/* <!-- Search Select --> */}
  <div className="col-lg-6 col-md-12">



  <div className="form-group ">
          <label>Skills </label>
          <Select
            defaultValue={[skills[2]]}
            isMulti
            name="colors"
            options={skills}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setArraySkillsToPush(e)}
          />
          
        </div>




  </div>


        <div className="row">
          
        <div className="col-lg-6 col-md-12">
       
        <div className="row">
        <div className="form-group col-lg-12 col-md-12">
       <label>Città</label>
            <input
              value={candidateToUse?.location?.city}
              onBlur={(e) => validateInput(e)}
              className={error.location ? "errorInput" : ""}
              onChange={(e) =>
                setCandidateToUse((candidateToUse) => ({
                  ...candidateToUse,
                  location: {
                    ...candidateToUse?.location,
                    city: e.target.value,
                  },
                }))
              }
              id="location-field"
              type="text"
              name="cittaà"
              placeholder="Città"
            />
        </div>


        <div className=" col-lg-6 col-md-6">
        <div className="form-group">
       
          <label>Latitude</label>
          <input type="text" name="name" placeholder="Melbourne" />

          </div>
        
        </div>

        {/* <!-- Input --> */}
        <div className="col-lg-6 col-md-6">
        <div className="form-group ">
         
          <label>Longitude</label>
          <input type="text" name="name" placeholder="Melbourne" />
          </div>
        
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="form-group ">
          <label>Disponibile a soistarsi entro</label>
            <InputRange
              formatLabel={(value) => ``}
              minValue={0}
              maxValue={100}
              value={getDestination}
              className={error.getDestination ? "errorInput" : ""}
              onBlur={(e) => validateInput(e)}
              onChange={(value) => handleOnChange(value)}
            />
            </div>
          </div>


        <div className="col-lg-6 col-md-12">
          <button className="theme-btn btn-style-three">Cerca città</button>
          </div>
      
        </div>
        </div>


        <div className="col-lg-6 col-md-12">
        <div className="form-group ">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>
          </div>
          </div>      

     
        <div className="form-group col-lg-12 col-md-12">
          <label>Note</label>
          <textarea   onChange={(e) =>
                setCandidateEdit({ ...candidateEdit, note: e.target.value })
              } placeholder={candidateEdit?.note}></textarea>
        </div>
{/* 
        <Education
          setEducazioneToSend={setEducazioneToSend}
          educazioneList={candidateToUse?.educazione}
        ></Education>

         <Experience
          setEsperienzeToSend={setEsperienzeToSend}
          esperienzeList={candidateToUse?.esperienze}
        ></Experience>


        <AwardsCertificates
          setPremiCertificatiToSend={setPremiCertificatiToSend}
          educazioneList={candidateToUse?.premi}
        ></AwardsCertificates> */}




{/* <div className="col-6 mt-20">
          <div className="form-group">
            <label>Username</label>
            <input
              id="username-field"
              className={error.username ? "errorInput" : ""}
              type="text"
              name="username"
              value={candidateToUse?.username}
              placeholder="Username"
              onBlur={(e) => validateInput(e)}
              onChange={(e) =>
                setCandidateToUse((candidateToUse) => ({
                  ...candidateToUse,
                  credentials: {
                    ...candidateToUse?.credentials,
                    username: e.target.value,
                  },
                }))
              }
              required
            />
          </div>
        </div>

        <div className="col-6 mt-20">
              <div className="form-group">
              <label>Stato</label>
                   <select
                     value={candidateToUse?.role}
                     className= " chosen-single form-select"
                     name="status"
                     onChange={(e) =>
                      setCandidateToUse({ ...candidateToUse, status: e.target.value })
                     }
                     required
                   >
                     <option>new</option>
                     <option>approved</option>
                     <option>waiting</option>
                   </select>
             </div> 
          </div>

        <div className="col-6 mt-20">
          <div className="form-group">
            <label>Password</label>
            <input
              type={passwordType}
              name="password"
              className={error.password ? "errorInput" : ""}
              placeholder="Password"
              required
              onChange={(e) =>
                setCandidateToUse((candidateToUse) => ({
                  ...candidateToUse,
                  credentials: {
                    ...candidateToUse?.credentials,
                    password: e.target.value,
                  },
                }))
              }
              onBlur={(e) => validateInput(e)}
            />
            <span className="p-viewer2" onClick={togglePassword}>
              {passwordType === "password" ? (
                <i className="fa fa-eye"></i>
              ) : (
                <i className="fa fa-eye-slash"></i>
              )}
            </span>
          </div>

          {error.password && <span className="err">{error.password}</span>}
        </div>
        <div className="col-6 mt-20">
          <div className="form-group">
            <label>Conferma passsword</label>
            <input
              id="sesso-field"
              type={passwordType}
              name="confirmPassword"
              placeholder="Conferma passsword"
              onBlur={validateInput}
              className={error.confirmPassword ? "errorInput" : ""}
              onChange={(e) =>
                setCandidateToUse({
                  ...candidateToUse,
                  confirmPassword: e.target.value,
                })
              }
              required
            />
          </div>
          {error.confirmPassword && (
            <span className="err">{error.confirmPassword}</span>
          )}
        </div> */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>) : (<div>
        <Loader></Loader>
<h1>Stiamo inserendo il nuovo candidato</h1>


      </div>)}

</div>) }

    </form>
  );
};

export default FormInfoBox;

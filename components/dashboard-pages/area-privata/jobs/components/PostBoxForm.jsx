import Map from "../../../Map";
import Select from "react-select";
import { useEffect, useState } from "react";

const PostBoxForm = ({dataOL}) => {
  console.log(dataOL)
  const specialisms = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];
  const [offertEdit, setOffertaEdit] = useState({
    id: `${dataOL._id}`,
    codiceJod: `${dataOL.codiceJod}`,
    note: `${dataOL.note}`,
    jobTitle: `${dataOL.jobTitle}`,
    location : `${dataOL.location}`,
    company: `${dataOL.company}`,
    created_at:`${dataOL.created_at}`,
    category : `${dataOL.category}`,
    jobType:`${dataOL.jobType[0].type}`,
    });
    console.log(offertEdit)
  
  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-6">
          <label>Titolo annuncio di lavoro</label>
          <input type="text" name="titoloAnnuncio"  placeholder={dataOL.jobTitle}  value={dataOL.jobTitle} onChange={(e) =>
                       setOffertaEdit({ ...offertEdit, jobTitle: e.target.value })
                     }/>
        </div>
        <div className="form-group col-lg-6 col-md-6">
          <label>Nome Azienda</label>
          <input type="text" name="company"  placeholder={dataOL.company}  value={dataOL.company} onChange={(e) =>
                       setOffertaEdit({ ...offertEdit, company: e.target.value })
                     }/>
        </div>
        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Descrizione annuncio</label>
          <textarea  placeholder="Descrizione.."   value={dataOL.note} onChange={(e) =>
                       setOffertaEdit({ ...offertEdit, note: e.target.value })
                     }></textarea>
        </div>

       

        <div className="form-group col-lg-6 col-md-12">
          <label>Categoria lavoro</label>
          <select  className="chosen-single form-select"  value={offertEdit.category}  placeholder={dataOL.category} onChange={(e) =>
                       setOffertaEdit({ ...offertEdit, category: e.target.value })}>
            <option>Infromatica</option>
            <option>Legge</option>
            <option>Contabilià</option>
            <option>Marketing</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Tipo di contratto</label>
          <select  className="chosen-single form-select"  value={offertEdit.jobType}  placeholder={offertEdit.jobType} onChange={(e) =>
                       setOffertaEdit({ ...offertEdit, jobType: e.target.value })}>
            <option>Full Time</option>
            <option>Part-time</option>
            <option>Prestazione</option>
          </select>
        </div>


      


     
      
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Find On Map</label>
          <input
            type="text"
            name="name"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Latitude</label>
          <input type="text" name="name" placeholder="Melbourne" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Longitude</label>
          <input type="text" name="name" placeholder="Melbourne" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-three">Search Location</button>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>


        <div className="form-group col-lg-6 col-md-6">
          <label>Data aggiunta</label>
          <input type="date" name="created_at"   placeholder={offertEdit.created_at}  value={offertEdit.created_at} onChange={(e) =>
                       setOffertaEdit({ ...offertEdit, created_at: e.target.value })
                     }/>
        </div>
        <div className="form-group col-lg-6 col-md-6">
          <label>Codice Offerta</label>
          <input type="number" name="codiceJod"  placeholder={offertEdit.codiceJod}  value={offertEdit.codiceJod} onChange={(e) =>
                       setOffertaEdit({ ...offertEdit, codiceJod: e.target.value })
                     }/>
        </div>
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one">Next</button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;

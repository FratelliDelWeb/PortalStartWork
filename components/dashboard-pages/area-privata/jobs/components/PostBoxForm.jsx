import Map from "../../../Map";
import Select from "react-select";
import { useEffect, useState } from "react";
import { modifyJob } from "../../../../../services/private/modifyJob";


const PostBoxForm = ({ job,
  jobView,
  setJob,
  setJobView,}) => {

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

  const setJobEditData = () => {
    console.log("Candidate => ", job);
    console.log("CandidateView => ", jobView);
    let editData = {
      id: job?._id,
      fields: [
     
        {
          name: "jobTitle",
          from: job?.jobTitle,
          to: jobView?.jobTitle,
        },
        {
          name: "note",
          from: job?.note,
          to: jobView?.note,
        },
        {
          name: "company",
          from: job?.company,
          to: jobView?.company,
        },
       
     
       
      ],
    };
    saveCandidate(editData);
  };
  
  const saveCandidate = async (jobView) => {
    await modifyJob(jobView).then((res) => {
      const message = res.message;
      if (message == "Update successful") {
      /*   setState("ok"); */
        const job = res.client;
        setJob(job);
        setJobView(job);
        setTimeout(() => {
        /*   setState("start"); */
        }, 1000);
      }
    });
  };
  const handleSubmit = function (e) {
  
    e.preventDefault();
    setJobEditData();
  };
  return (
    <form className="default-form"   method="POST"
    onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-6">
          <label>Titolo annuncio di lavoro</label>
          <input type="text" name="titoloAnnuncio"  placeholder={jobView.jobTitle}  value={jobView.jobTitle} onChange={(e) =>
                      setJobView((el) => {
                        return {
                          ...el,
                          jobTitle: e.target.value,
                        };
                      })
                    }/>
        </div>
        <div className="form-group col-lg-6 col-md-6">
          <label>Nome Azienda</label>
          <input type="text" name="company"  placeholder={jobView.company}  value={jobView.company} onChange={(e) =>
                      setJobView((el) => {
                        return {
                          ...el,
                          company: e.target.value,
                        };
                      })
                    }/>
        </div>
        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Descrizione annuncio</label>
          <textarea  placeholder="Descrizione.."   value={jobView.note}  onChange={(e) =>
                      setJobView((el) => {
                        return {
                          ...el,
                          note: e.target.value,
                        };
                      })
                    }></textarea>
        </div>

       

        <div className="form-group col-lg-6 col-md-12">
          <label>Categoria lavoro</label>
          <select  className="chosen-single form-select"  value={jobView.category}  placeholder={jobView.category}  onChange={(e) =>
                      setJobView((el) => {
                        return {
                          ...el,
                          category: e.target.value,
                        };
                      })
                    }>
            <option>Infromatica</option>
            <option>Legge</option>
            <option>Contabilià</option>
            <option>Marketing</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Tipo di contratto</label>
          <select  className="chosen-single form-select"  value={jobView.jobType}  placeholder={jobView.jobType} >
            <option>Full Time</option>
            <option>Part-time</option>
            <option>Prestazione</option>
          </select>
        </div>


      


     
      
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Città</label>
          <input
            type="text"
            name="name"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
          />
          <div className="row">
            <div className="form-group mt-5 col-6">
            <label>Data aggiunta</label>
          <input type="date" name="created_at"   placeholder={jobView.created_at}  value={jobView.created_at} onChange={(e) =>
                      setJobView((el) => {
                        return {
                          ...el,
                          created_at: e.target.value,
                        };
                      })
                    }/>
            </div>
            <div className="form-group mt-5 col-6">
            <label>Codice Offerta</label>
          <input type="number" name="codiceJod"  placeholder={jobView.codiceJod}  value={jobView.codiceJod} onChange={(e) =>
                      setJobView((el) => {
                        return {
                          ...el,
                          codiceJob: e.value,
                        };
                      })
                    }/>
            </div>
              {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one">Salva</button>
        </div>
          </div>

        </div>

        <div className="form-group col-lg-6 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>

      
      </div>
    </form>
  );
};

export default PostBoxForm;

import Link from "next/link.js";
import { useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";
import jobs from "../../../../../data/job-featured.js";

const JobListingsTable = ({dataOL}) => {

 const [listaOfferte, setListaOfferte]= useState();
 
 useEffect(() => {
  console.log(dataOL)
  setListaOfferte(dataOL)
 },[dataOL])

  
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Le offerte a cui ti sei candidato</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Più recenti</option>
            <option>Più vecchi</option>
           
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Titolo Offerta</th>
                  <th>Data di aggiunta</th>
                  <th>Stato</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {dataOL?.map((item) => (
                  <tr key={item?._id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img src={item?.logo} alt="logo" />
                            </span>
                            <h4>
                              <Link href={`/area-privata-candidates/jobs/${item?._id}`}>
                                {item?.jobTitle}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                              {item?.category}
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                {item?.location}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.created_at}</td>
                    <td className="status">{item?.status}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Aplication">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Aplication">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable;

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import candidatesData from "../../../../../data/candidates";


const Applicants = ({dataCL}) => {
  const getITDateTime = (now) => {
    return new Date(now).toLocaleDateString("it-IT");
  };
const [dataCLOrder ,setdataCLOrder ] = useState()

  useEffect(()=> {
    setdataCLOrder(dataCL.filter(function (el) { return el.status === "new"}).reverse());
  },[dataCL])
  return (
    <>
      {dataCLOrder?.map((candidate) => (
        <div
          className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
          key={candidate._id}
        >
          <div className="inner-box">
            <div className="content">
              <figure className="image">
                <img src={candidate.avatar} alt="candidates" />
              </figure>
              <div className="align-items-baseline d-flex justify-content-between">
              <h4 className="name">
                <Link href={`/area-privata/candidates/${candidate._id}`}>
                  {candidate.name} - {candidate.surname}
                </Link>
              </h4>
              <ul className="post-tags"><li  className="colored shadow-sm">{candidate.status}</li></ul>  
              </div>
         
              <h6 className="designation">{candidate.mansione}</h6>

              <ul className="candidate-info">
              
                <li>
                  <span className="icon flaticon-map-locator"></span>{" "}
                  {candidate.location.city}
                </li>
                <li>
                <i className="las la-route"></i>
                  {candidate.rangeWithin} /Km
                </li>
                <li>
                          <span className="icon flaticon-clock"></span>{getITDateTime(candidate.created_at)}
                        </li>
              </ul>
              {/* End candidate-info */}

              <ul className="post-tags">
                {candidate.skills.map((val, i) => (
                  <li key={i}>
                    <a href="#">{val}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End content */}

            <div className="option-box">
              <ul className="option-list">
                <li>
                  <Link href={`/area-privata/candidates/${candidate._id}`} data-text="View Aplication">
                    <span className="la la-eye"></span>
                  </Link>
                </li>
                <li>
                  <button  data-text="Approve Aplication">
                    <span className="la la-check"></span>
                  </button>
                </li>
                <li>
                  <button data-text="Reject Aplication">
                    <span className="la la-times-circle"></span>
                  </button>
                </li>
                <li>
                  <button data-text="Delete Aplication">
                    <span className="la la-trash"></span>
                  </button>
                </li>
              </ul>
            </div>
            {/* End admin options box */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Applicants;

import { useState } from "react";

const AwardsCertificates = ({ setCandidateView, premi }) => {
  console.log(premi)

  console.log("Educazione => ", premi);
  return (
    <div className="form-group col-lg-12 col-md-12">
      <div className="resume-outer  theme-yellow">
        <div className="align-items-start justify-content-start upper-title">
          <h4 id="education">
            <i class="las la-award"></i>Premi & Certificati

          </h4>
          <div className="resume-block ">
            <div className="inner">
              <div className="edit-box">
                <div className="edit-btns">
               
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          
            <div>
              {premi?.map((ed, i) => (
                <div key={i} className="resume-block ">
                  <div className="inner">
                    <span className="name">
                      {" "}
                      <i class="las la-award"></i>
                    </span>

                    <div className="title-box">
                      <div className="info-box">
                        <h3>{ed.titoloStudio}</h3>
                        <span>{ed.luogo}</span>
                      </div>
                      <div className="edit-box">
                        <span className="year">
                          {ed.data}
                        </span>
                      </div>
                    </div>
                    <div className="text">{ed.desc}</div>
                  </div>
                </div>
              ))}
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default AwardsCertificates;

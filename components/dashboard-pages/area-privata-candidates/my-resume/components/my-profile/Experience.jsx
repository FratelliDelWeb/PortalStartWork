import { useRouter } from "next/router";
import { useState } from "react";

const Experience = ({
  setCandidateView,
  esperienze = { titolo: "", startTo: "", finishTo: "", luogo: "", desc: "" },
}) => {
  /* INPUT DINAMICI
   */
  const [editModeX, setEditMode] = useState(false);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...esperienze];
    list[index][name] = value;

    setCandidateView((el) => {
      return {
        ...el,
        esperienze: list,
      };
    });
  };

  const handleRemoveClick = (index) => {
    const list = [...esperienze];
    list.splice(index, 1);

    setCandidateView((el) => {
      return {
        ...el,
        esperienze: list,
      };
    });
  };

  const handleAddClick = () => {
    const obj = { titolo: "", startTo: "", finishTo: "", luogo: "", desc: "" };
    const esperienze = esperienze.push(obj);
    setCandidateView((el) => {
      return {
        ...el,
        esperienze: esperienze,
      };
    });
  };

  const setModeOn = () => {
    setEditMode(true);
    console.log(editModeX);
  };

  const setModeOff = () => {
    setEditMode(false);
    console.log(editModeX);
  };

  return (
    <div className="form-group col-lg-12 col-md-12">
      <div className="resume-outer  theme-yellow">
        <div className="align-items-start justify-content-start upper-title">
          <h4 id="education">
            <i class="las la-toolbox"></i>Esperienze lavorative
          </h4>
          <div className="resume-block ">
            <div className="inner">
              <div className="edit-box">
                <div className="edit-btns">
                  {editModeX === false ? (
                    <div onClick={() => setModeOn()} href="/#education">
                      <span className="la la-pencil"></span>
                    </div>
                  ) : (
                    <div onClick={() => setModeOff()} href="/#education">
                      <i class="las la-trash-restore-alt"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {editModeX === false ? (
            <div>
              {esperienze?.map((ed, i) => (
                <div key={i} className="resume-block ">
                  <div className="inner">
                    <span className="name">
                      {" "}
                      <i class="las la-file-invoice"></i>
                    </span>

                    <div className="title-box">
                      <div className="info-box">
                        <h3>{ed.titolo}</h3>
                        <span>{ed.luogo}</span>
                      </div>
                      <div className="edit-box">
                        <span className="year">
                          {ed.startTo} - {ed.finishTo}
                        </span>
                      </div>
                    </div>
                    <div className="text">{ed.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div class="box-resumes-edit">
              {esperienze?.map((x, i) => {
                return (
                  <div
                    key={i}
                    className="row resumes-edit bg-light shadow-sm p-1 pb-2 mb-50"
                  >
                    <div className="col-6 mt-20">
                      <div className="form-group">
                        <label>Titolo lavoro</label>
                        <input
                          type="text"
                          name="titolo"
                          placeholder={x.titolo}
                          onChange={(e) => handleInputChange(e, i)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6 mt-20">
                      <div className="form-group">
                        <label>Luogo</label>
                        <input
                          type="text"
                          name="luogo"
                          placeholder={x.luogo}
                          onChange={(e) => handleInputChange(e, i)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6 mt-20">
                      <div className="form-group">
                        <label>Altre info</label>
                        <textarea
                          type="text"
                          name="desc"
                          rows="1"
                          placeholder={x.desc}
                          onChange={(e) => handleInputChange(e, i)}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-6 mt-20">
                      <div className="form-group">
                        <label>Dal </label>
                        <input
                          type="date"
                          name="startTo"
                          placeholder={x.startTo}
                          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          onChange={(e) => handleInputChange(e, i)}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Al</label>
                        <input
                          type="date"
                          name="finishTo"
                          placeholder={x.finishTo}
                          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          onChange={(e) => handleInputChange(e, i)}
                          required
                        />
                      </div>
                    </div>

                    <div className="btn-box">
                      {esperienze.length > 1 && (
                        <div
                          onClick={() => handleRemoveClick(i)}
                          className="add-info-btn float-lg-end d-flex"
                        >
                          {" "}
                          <i className="las la-trash-alt"></i> Rimuovi
                        </div>
                      )}
                      {esperienze.length - 1 === i && (
                        <div
                          className="add-info-btn"
                          onClick={() => handleAddClick()}
                        >
                          <span className="icon flaticon-plus"></span> Aggiungi
                          Campo
                        </div>
                      )}
                      <hr></hr>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;

import { useState } from "react";

const Experience = ({ setCandidateView, esperienze }) => {
  const [editModeX, setEditMode] = useState("off");

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    // 1. Make a shallow copy of the items
    let items = [...esperienze];
    // 2. Make a shallow copy of the item you want to mutate
    let item = { ...items[index] };
    // 3. Replace the property you're intested in
    item[name] = value;
    // 4. Put it back into our array. N.B. we *are* mutating the array here,
    //    but that's why we made a copy first
    items[index] = item;
    // 5. Set the state to our new copy
    setCandidateView((el) => {
      return {
        ...el,
        esperienze: items,
      };
    });
  };

  const handleRemoveClick = (index) => {
    let items = [...esperienze];
    items.splice(index, 1);

    setCandidateView((el) => {
      return {
        ...el,
        esperienze: items,
      };
    });
  };

  const handleAddClick = () => {
    addEmptyObject();
  };

  const addEmptyObject = () => {
    const obj = { titolo: "", startTo: "", finishTo:"", luogo: "", desc: "" };
    let items = [...esperienze];
    items.push(obj);
    setCandidateView((el) => {
      return {
        ...el,
        esperienze: items,
      };
    });
  };

  const setModeOn = () => {
    if (esperienze) {
      if (esperienze.length < 1) addEmptyObject();
    }
    setEditMode("on");
  };

  const setModeOff = () => {
    const obj = { titolo: "", startTo: "", finishTo:"", luogo: "", desc: "" };
    if (esperienze) {
      if (JSON.stringify(esperienze[0]) === JSON.stringify(obj))
        esperienze.shift();
    }
    setEditMode("off");
  };

  console.log("Educazione => ", esperienze);
  return (
    <div className="form-group col-lg-12 col-md-12">
      <div className="resume-outer  theme-red">
        <div className="align-items-start justify-content-start upper-title">
        <h4 id="education">
          <i class="las la-toolbox"></i>Esperienze Lavorative
          </h4>
          <div className="resume-block ">
            <div className="inner">
              <div className="edit-box">
                <div className="edit-btns">
                  {editModeX === "off" ? (
                    <div onClick={setModeOn} href="/#education">
                      <span className="la la-pencil"></span>
                    </div>
                  ) : (
                    <div onClick={setModeOff} href="/#education">
                      <i class="las la-trash-restore-alt"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {editModeX === "off" ? (
            <div>
              {esperienze?.map((ed, i) => (
                <div key={i} className="resume-block ">
                  <div className="inner">
                    <span className="name">
                      {" "}
                      <i class="las la-toolbox"></i>
                    </span>

                    <div className="title-box">
                      <div className="info-box">
                        <h3>{ed.titoloStudio}</h3>
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
              {" "}
              {esperienze?.map((x, i) => {
                return (
                  <div
                    key={i}
                    className="row resumes-edit bg-light shadow-sm p-1 pb-2 mb-50"
                  >
                    <div className="col-6 mt-20">
                      <div className="form-group">
                        <label>Titolo </label>
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
                      {esperienze?.length !== 1 && (
                        <div
                          onClick={() => handleRemoveClick(i)}
                          className="add-info-btn float-lg-end d-flex"
                        >
                          {" "}
                          <i className="las la-trash-alt"></i> Rimuovi
                        </div>
                      )}
                      {esperienze?.length - 1 === i && (
                        <div className="add-info-btn" onClick={handleAddClick}>
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

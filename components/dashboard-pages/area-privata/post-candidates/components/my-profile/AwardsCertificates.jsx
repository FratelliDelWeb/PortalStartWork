import { useRouter } from "next/router";
import { useState } from "react";

const AwardsCertificates = ({setPremiCertificatiToSend , educazioneList}) => {
/* INPUT DINAMICI
 */

console.log(educazioneList)
const [inputList, setInputList] = useState(educazioneList);
const [editModeX , setEditMode] = useState("off");



  const handleInputChange = (e, index) => {
    debugger
    const { name, value } = e.target;
    const list = [...inputList];
    console.log(value)
    console.log(name)
    const dataX = name;
    list[index][name] = value;
    console.log(list)
    setInputList(list);
  };
  const handleRemoveClick = index => {
 
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    console.log(list)
  };
  const handleAddClick = () => {
    setInputList([...inputList, { titolo: "", data: "", luogo: "" , desc:""}]);
  };
  const setModeOn = () => {
    setEditMode("on")
  };
  const setModeOff = () => {
    setEditMode("off")

    setPremiCertificatiToSend(inputList);
  };
  


  return (
    <div className="form-group col-lg-6 col-md-12">
    <div className="resume-outer">
    <div className="align-items-start justify-content-start upper-title">
   
      <h4 id ="education"><i className="las la-award"></i>Premi & Certificati</h4>
      <div  className="resume-block ">
      <div className="inner">
      <div className="edit-box">
      <div className="edit-btns">
        {editModeX === ("off") ? (  <button onClick={setModeOn} href="/#education">
              <span className="la la-pencil"></span>
            </button>) : (  <button onClick={setModeOff} href="/#education">
            <i class="las la-trash-restore-alt"></i> 
            </button>)}
          
           
          </div>
          </div>
          </div>
          </div>
    </div>
    <div>
    {editModeX === "off" ? (<div>
     
{inputList.map((ed, i) => (
  <div key={i} className="resume-block ">
    <div className="inner">
    <span className="name">    <i className="las la-medal"></i></span>

      <div className="title-box">
        <div className="info-box">
          <h3>{ed.titolo}</h3>
          <span>{ed.luogo}</span>
        </div>
        <div className="edit-box">
          <span className="year">{ed.data} </span>
          
        </div>
      </div>
      <div className="text">
       {ed.desc}
     
      </div>
    </div>
  </div>
))}</div>) : (

<div class="box-resumes-edit"> {inputList.map((x, i) => {
    return (
          <div className="row resumes-edit bg-light shadow-sm p-1 pb-2 mb-50">
           <div className="col-6 mt-20">
              <div className="form-group">
                <label>Titolo</label>
                <input
                
                  type="text"
                  name="titolo"
                  placeholder={x.titolo}
                  onChange={e => handleInputChange(e, i)}
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
                  onChange={e => handleInputChange(e, i)}
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
                  onChange={e => handleInputChange(e, i)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-6 mt-20">
             

              <div className="form-group">
                <label>Data</label>
                <input
                  
               
                  type="date"
                  name="data"
                  placeholder={x.data}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  onChange={e => handleInputChange(e, i)}
                  required
                />
              </div>
            </div>
     
            
        <div className="btn-box">
          {inputList.length !== 1 && <button
          onClick={() => handleRemoveClick(i)} className="add-info-btn float-lg-end d-flex" > <i className="las la-trash-alt"></i> Rimuovi</button>  }
          {inputList.length - 1 === i &&  <button className="add-info-btn" onClick={handleAddClick}><span className="icon flaticon-plus"></span> Aggiungi Campo</button>}
          <hr ></hr>
        </div>


</div>
      
     
 
    










    );
  })}</div>

)}
    
 
 




</div>


    </div>
</div> 

  );
};

export default AwardsCertificates;

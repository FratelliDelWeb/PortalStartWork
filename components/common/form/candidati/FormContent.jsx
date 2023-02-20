
import DestinationRangeSlider from "../../../candidates-listing-pages/components/DestinationRangeSlider"
const FormContent = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div class="row">
          <div class="row mt-20">
                <div class ="col-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" name="nome" placeholder="nome" required />
                          </div>
               
                      

                </div> 
                <div class ="col-6">
                      
                      
                <div className="form-group">
                        <label>Email</label>
                        <input
                          id="email-field"
                          type="email"
                          name="email"
                          placeholder="eamil"
                        />
                      </div>  

                </div> 
          </div>

          <div class="row mt-20">
                <div class ="col-6">
                        <div className="form-group">
                            <label>Età</label>
                            <input type="text" name="età" placeholder="Età" required />
                          </div>
               
                      

                </div> 
                <div class ="col-6">
                      
                      
                <div className="form-group">
                        <label>Sesso</label>
                        <input
                          id="email-field"
                          type="text"
                          name="Sesso"
                          placeholder="Sesso"
                        />
                      </div>  

                </div> 
          </div>


          <div class="row mt-20">
          <div class="col-12">
                  <div className="form-group">
                              <label>Mansione</label>
                              <input
                                id="prof-field"
                                type="text"
                                name="mansione"
                                placeholder="Mansione"
                              />
                          </div>
                  </div>
          </div>






          <div class="row mt-20">
            <div class ="col-6">
            <div className="form-group">
                                            <label>Città</label>
                                            <input
                                              id="prof-field"
                                              type="text"
                                              name="cittaà"
                                              placeholder="Città"
                                            />
                                </div>
                 
            </div> 
            <div class ="col-6">
                  
                            <div className="form-group">
                                <label>Disponibile a soistarsi entro</label>
                                <DestinationRangeSlider></DestinationRangeSlider>
                            </div>
                          
                            
            </div>
          </div>
         
      </div>






      <div class="row mt-20">
      <div className="form-group">
              <button className="theme-btn btn-style-one" type="submit">
              INVIA CANDIDATURA
              </button>
            </div>
      </div>
    
      {/* login */}
    </form>
  );
};

export default FormContent;

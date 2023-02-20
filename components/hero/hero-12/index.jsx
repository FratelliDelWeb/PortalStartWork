import PopularSearch from "../PopularSearch";
import SearchForm4 from "../../common/job-search/SearchForm4";
import SearchForm2 from "../../common/job-search/SearchForm2";

import React, { useState } from 'react';

const index = () => {

  const [category, setCategory] = useState("Candidato");





  return (
    <section className="banner-section-three -type-12 mt-30">
      <div className="bg-image">
  
 
        <figure
          className="main-image"
          data-aos-delay="100"
          data-aos="fade-left"
        >
             {category === "Candidato" ? (
                  <img src="images/index-14/images/1.png" alt="index" />  ) : (  <img src="images/index-14/images/2.png" alt="index" /> )}
   
         </figure>
      </div>
      {/* End bg-image */}

      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div class="row">
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                          <div className="title-box" data-aos="fade-up">
                              <h3>
                                Cerca  {category}
                                <br />
                              </h3>
                              <div className="text">
                                Find Jobs, Employment & Career Opportunities
                              </div>
                          </div>
                  </div>



                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                          <div className="title-box" data-aos="fade-up">
                          <div className="text">
                               Cosa stai cercando ?
                              </div>
                              <button  class="theme-btn -white mr-30" onClick={() => setCategory("Azienda")} type="button">
                           AZIENDA 
                              
                              </button>
                              <button  class="theme-btn -white" onClick={() => setCategory("Candidato")}  type="button" >
                        CANDIDATO
                             
                              </button>
                            
                          </div>
                  </div>
              </div>
            
              {/* <!-- Job Search Form --> */}
              <div
                className="job-search-form-two"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                   {category === "Azienda" ? ( <SearchForm2 /> ) : (  <SearchForm4 />)}
               
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default index;

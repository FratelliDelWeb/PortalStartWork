import FormInfoBox from "./FormInfoBox";
const index = ({
  candidate,
  candidateView,
  setCandidate,
  setCandidateView,
}) => {
  return (
    <div className="widget-content">
      {/*  <LogoUpload /> */}
      {/* End logo and cover photo components */}
      <div className="tabs-box">
                      <section className="candidate-detail-section">
                        <div className="candidate-detail-outer">
                          <div className="auto-container">
                            <div className="row">
                              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                                <div className="candidate-block-five">
                                  <div className="inner-box">
                                    <div className="content">
                                      <figure className="image">
                                        <img
                                          src={candidateView?.avatar}
                                          alt="avatar"
                                        />
                                      </figure>
                                      <h4 className="name w-50">
                                        {candidateView?.name}{" "}
                                        {candidateView?.surname} -{" "}
                                        {candidateView?.publicName}
                                      </h4>

                                      <ul className="candidate-info">
                                        <li className="designation">
                                          {candidateView?.mansione}
                                        </li>
                                        <li>
                                        <i class="las la-map-marker-alt"></i>
                                          {candidateView?.location?.city}
                                        </li>
                                        <li>
                                        <i class="lar la-envelope"></i>
                                          {candidateView?.email}
                                        </li>
                                        <li>
                                        <i class="las la-phone"></i>
                                          {candidateView?.phone}
                                        </li>  <li>
                                        <i class="las la-calendar-day"></i>
                                          Aggiunto il: {candidateView?.created_at}
                                        </li>
                                      </ul>

                                      <ul className="post-tags">
                                        {candidateView?.skills?.map((val, i) => (
                                          <li key={i}>{val}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div> 
      <FormInfoBox
        candidate={candidate}
        candidateEdit={candidateView}
        setCandidate={setCandidate}
        setCandidateView={setCandidateView}
      />
      {/* compnay info box */}
    </div>
  );
};

export default index;

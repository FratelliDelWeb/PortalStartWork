import Link from "next/link";
import candidates from "../../data/candidates";

const Candidates2 = ({dataCL}) => {
  return (
    <>
      {dataCL.map((candidate) => (
        <div
          className="candidate-block-two col-lg-6 col-md-12 col-sm-12"
          key={candidate._id}
        >
          <div className="inner-box">
            <div className="content-box">
              <figure className="image">
                <img src={candidate.avatar} alt="avatar" />
              </figure>
              <h4 className="name">{candidate.name}</h4>
              <span className="designation">{candidate?.designation}</span>
              <div className="location">
                <i className="flaticon-map-locator"></i> {candidate.location.city}
              </div>
            </div>
            {/* End .content-box */}
            <Link
              href={`/candidates/${candidate._id}`}
              className="theme-btn btn-style-one"
            >
              <span className="btn-title">Vedi Profilo</span>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Candidates2;

import Link from "next/link";
import candidates from "../../data/candidates";

const Candidates3 = ({dataCL}) => {
  return (
    <>
      {dataCL.map((candidate) => (
        <div
          className="candidate -type-1 col-xl-auto col-lg-3 col-md-6 col-sm-12"
          key={candidate._id}
        >
          <div className="image">
            <img src={candidate.avatar} alt="image" />
          </div>

          <div className="content">
            <h4>
              <Link href={`/candidates/${candidate._id}`}>
                {candidate.publicName}
              </Link>
            </h4>
            <p>{candidate.mansione}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Candidates3;

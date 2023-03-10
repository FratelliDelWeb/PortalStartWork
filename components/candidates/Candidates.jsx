import Link from "next/link";
import Slider from "react-slick";
import candidates from "../../data/candidates";

const Candidates = ({ dataCL }) => {
  const settings = {
    dots: true,
    speed: 1400,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {dataCL.slice(0, 12).map((candidate) => (
          <div className="candidate-block" key={candidate._id}>
            <div className="inner-box">
              <figure className="image">
                <img src={candidate.avatar} alt="avatar" />
              </figure>
              <h4 className="name">{candidate.publicName}</h4>
              <span className="designation">{candidate.mansione}</span>

              <div className="location">
                <i className="flaticon-map-locator"></i>{" "}
                {candidate.location.city}
              </div>
              <Link
                href={`/candidates/${candidate.publicName}`}
                className="theme-btn btn-style-three"
              >
                <span className="btn-title">Visualizza</span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Candidates;

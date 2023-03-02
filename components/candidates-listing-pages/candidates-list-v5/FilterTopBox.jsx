import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addCandidateGender,
  addCategory,
  addDatePost,
  addDestination,
  addKeyword,
  addLocation,
  addPerPage,
  addSort,
  clearExperienceF,
  clearQualificationF,
} from "../../../features/filter/candidateFilterSlice";
import {
  clearDatePost,
  clearExperience,
  clearQualification,
} from "../../../features/candidate/candidateSlice";

const FilterTopBox = ({ dataCL, onActiveElement }) => {
  const {
    keyword,
    location,
    destination,
    category,
    candidateGender,
    datePost,
    experiences,
    qualifications,
    sort,
    perPage,
  } = useSelector((state) => state.candidateFilter) || {};

  const dispatch = useDispatch();

  // keyword filter
  const keywordFilter = (item) =>
    keyword !== ""
      ? item?.name?.toLowerCase().includes(keyword?.toLowerCase()) && item
      : item;

  // location filter
  const locationFilter = (item) =>
    location !== ""
      ? item?.location?.city?.toLowerCase().includes(location?.toLowerCase())
      : item;

  // destination filter
  const destinationFilter = (item) =>
    item?.destination?.min >= destination?.min &&
    item?.destination?.max <= destination?.max;

  // category filter
  const categoryFilter = (item) =>
    category !== ""
      ? item?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase()
      : item;

  // gender filter
  const genderFilter = (item) =>
    candidateGender !== ""
      ? item?.gender.toLocaleLowerCase() ===
          candidateGender.toLocaleLowerCase() && item
      : item;

  // date-posted filter
  const datePostedFilter = (item) =>
    datePost !== "all" && datePost !== ""
      ? item?.created_at
          ?.toLocaleLowerCase()
          .split(" ")
          .join("-")
          .includes(datePost)
      : item;

  // experience filter
  const experienceFilter = (item) =>
    experiences?.length !== 0
      ? experiences?.includes(
          item?.experience?.split(" ").join("-").toLocaleLowerCase()
        )
      : item;

  // qualification filter
  const qualificationFilter = (item) =>
    qualifications?.length !== 0
      ? qualifications?.includes(
          item?.qualification?.split(" ").join("-").toLocaleLowerCase()
        )
      : item;

  // sort filter
  const sortFilter = (a, b) => {
    sort === "des" ? a._id > b._id && -1 : a._id < b._id && -1;
  };

  const handleOnHover = (element) => {
    onActiveElement({
      element: element,
    });
  };

  let content = dataCL
    ?.filter(keywordFilter)
    ?.filter(locationFilter)
    ?.filter(categoryFilter)
    ?.filter(genderFilter)
    ?.filter(datePostedFilter)
    ?.filter(experienceFilter)
    ?.filter(qualificationFilter)
    ?.sort(sortFilter)
    ?.slice(perPage.start, perPage.end === 0 ? 10 : perPage.end)
    ?.map((candidate) => (
      <div
        className="candidate-block-three"
        onMouseEnter={() => {
          handleOnHover(candidate);
        }}
        key={candidate.publicName}
      >
        <div className="inner-box">
          <div className="content">
            <figure className="image">
              <img src={candidate.avatar} alt="candidates" />
            </figure>
            <h4 className="name">
              <Link href={`/candidates/${candidate.publicName}`}>
                {candidate.publicName}
              </Link>
            </h4>

            <ul className="candidate-info">
              <li className="designation">{candidate.mansione}</li>
              <li>
                <span className="icon flaticon-map-locator"></span>{" "}
                {candidate.location.city}
              </li>
            </ul>
            {/* End candidate-info */}

            <ul className="post-tags">
              {candidate.skills.map((val, i) => (
                <li key={i}>
                  <a href="#">{val}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* End content */}

          <div className="btn-box">
            {/*    <button className="bookmark-btn me-2">
              <span className="flaticon-bookmark"></span>
            </button> */}
            {/* End bookmark-btn */}

            <Link
              href={`/candidates/${candidate.publicName}`}
              className="theme-btn btn-style-three"
            >
              <span className="btn-title">Dettagli</span>
            </Link>
          </div>
          {/* End btn-box */}
        </div>
      </div>
    ));

  // sort handler
  const sortHandler = (e) => {
    console.log(e.target.value);
    dispatch(addSort(e.target.value));
  };

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addPerPage(pageData));
  };

  const calculateWidth = (max, tot) => {
    let width = parseInt((max / tot) * 100).toString();
    return width.toString() + "%";
  };

  // clear handler
  const clearHandler = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addCategory(""));
    dispatch(addCandidateGender(""));
    dispatch(addDatePost(""));
    dispatch(clearDatePost());
    dispatch(clearExperienceF());
    dispatch(clearExperience());
    dispatch(clearQualification());
    dispatch(clearQualificationF());
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };
  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result show-filters">
          <button
            type="button"
            className="theme-btn toggle-filters"
            data-bs-toggle="offcanvas"
            data-bs-target="#filter-sidebar"
          >
            <span className="icon icon-filter"></span> Filtra
          </button>
        </div>
        {/* End showing results */}

        <div className="sort-by">
          {keyword !== "" ||
          location !== "" ||
          destination.min !== 0 ||
          destination.max !== 100 ||
          category !== "" ||
          candidateGender !== "" ||
          datePost !== "" ||
          experiences?.length !== 0 ||
          qualifications?.length !== 0 ||
          sort !== "" ||
          perPage?.start !== 0 ||
          perPage?.end !== 0 ? (
            <button
              className="btn btn-danger text-nowrap me-2"
              style={{ minHeight: "45px", marginBottom: "15px" }}
              onClick={clearHandler}
            >
              Pulisci tutto
            </button>
          ) : undefined}

          <select
            onChange={sortHandler}
            className="chosen-single form-select"
            value={sort}
          >
            <option value="">Ordina per</option>
            <option value="asc">Nuovi</option>
            <option value="des">Vecchi</option>
          </select>
          {/* End select */}

          <select
            className="chosen-single form-select ms-3 "
            onChange={perPageHandler}
            value={JSON.stringify(perPage)}
          >
            <option
              value={JSON.stringify({
                start: 0,
                end: 0,
              })}
            >
              Tutti
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 10,
              })}
            >
              10 per pagina
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 20,
              })}
            >
              20 per pagina
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 30,
              })}
            >
              30 per pagina
            </option>
          </select>
          {/* End select */}
        </div>
      </div>
      {/* End top filter bar box */}

      {content}

      {/* <!-- List Show More --> */}
      <div className="ls-show-more">
        <p>
          Vedi {content?.length} di {dataCL.length}
        </p>
        <div className="bar">
          <span
            className="bar-inner"
            style={{ width: calculateWidth(dataCL.length, content?.length) }}
          ></span>
        </div>
        <button
          onClick={perPageHandler}
          value={JSON.stringify({
            start: 0,
            end: dataCL.length,
          })}
          className="show-more"
        >
          Mostra tutti
        </button>
      </div>
      {/* <!-- Listing Show More --> */}
    </>
  );
};

export default FilterTopBox;

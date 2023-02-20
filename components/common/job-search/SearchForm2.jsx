import Router from "next/router";

const SearchForm2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-5 col-md-12 col-sm-12">
          <label className="title">Che tipo di lavoro cerchi?</label>
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="Lavoro, parola chiave "
          />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
          <label className="title">Dove cerchi lavoro?</label>
          <span className="icon flaticon-map-locator"></span>
          <input type="text" name="field_name" placeholder="CAP città" />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
          <button
            type="submit"
            className="theme-btn btn-style-one"
            onClick={() => Router.push("/job-list-v4")}
          >
            <span className="btn-title">Cerca Lavoro</span>
          </button>
        </div>
        {/* <!-- Form Group --> */}
      </div>
    </form>
  );
};

export default SearchForm2;

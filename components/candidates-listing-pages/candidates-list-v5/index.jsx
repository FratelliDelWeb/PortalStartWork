import MapJobFinder from "../components/MapJobFinder";
import LoginPopup from "../../common/form/login/LoginPopup";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import FilterTopBox from "./FilterTopBox";
import FilterSidebar from "./FilterSidebar";
import Footer from "../../home-9/Footer";
import { useState, useEffect } from "react";

const Index = ({ dataCL }) => {
  const initialState = {
    element: "",
  };

  const [state, setState] = useState(initialState);

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="ls-section map-layout">
        <div className="ls-cotainer">
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="filter-sidebar"
            aria-labelledby="offcanvasLabel"
          >
            <div className="filters-column hide-left">
              <FilterSidebar />
            </div>
          </div>
          {/* End filter column for tablet and mobile devices */}

          <div className="map-column width-50">
            <div className="map" style={{ height: "90%", width: "100%" }}>
              <MapJobFinder dataCL={dataCL} elementOnHover={state.element} />
            </div>
            {/* <!-- Map --> */}
          </div>
          {/* <!-- Map Column --> */}

          <div className="content-column width-50">
            <div className="ls-outer">
              <FilterTopBox dataCL={dataCL} onActiveElement={setState} />
              {/* <!-- ls Switcher --> */}
            </div>
          </div>
          {/* <!-- End Content Column --> */}
        </div>
        {/* End container */}
      </section>
      {/* <!--End Listing Page Section --> */}
      <Footer />
    </>
  );
};

export default Index;

import MapJobFinder from "../components/MapJobFinder";
import LoginPopup from "../../common/form/login/LoginPopup";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import FilterTopBox from "./FilterTopBox";
import FilterSidebar from "./FilterSidebar";
import Footer from "../../home-9/Footer";
const Index = ({ dataCL }) => {
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
            <div style={{ height: "100vh", width: "100%" }}>
              <MapJobFinder dataCL={dataCL} />
            </div>
            {/* <!-- Map --> */}
          </div>
          {/* <!-- Map Column --> */}

          <div className="content-column width-50">
            <div className="ls-outer">
              <FilterTopBox dataCL={dataCL} />
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

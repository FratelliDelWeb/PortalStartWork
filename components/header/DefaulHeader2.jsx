import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";

const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo.svg" alt="brand" />
              </Link>
            </div>
          </div>
          {/* End .logo-box */}

          <HeaderNavContent />
          {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
            <div className="btn-box">
              <a
                href="#"
                className="theme-btn btn-style-seven call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
               ACCEDI
              </a>
              <a
                 data-bs-target= "#candidatiPopupModal"
               data-bs-toggle="modal"
                className="theme-btn btn-style-five"
             
              >
                CANDIDATI
              </a>
            </div>
          </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;

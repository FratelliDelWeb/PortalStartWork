import Link from "next/link";
import InfoBox from "./InfoBox";
import TableInvoice from "./TableInvoice";

const index = ({candidateView}) => {
  return (
    <>
      {/* <!-- Invoice Section --> */}
      <section className="invoice-section">
        <div className="auto-container">
          <div className="upper-box btn-box">
         {/*    <Link href="/" className="theme-btn btn-style-three">
              Back Home
            </Link> */}
            <button className="theme-btn btn-style-one ms-3">STAMPA</button>
          </div>
        </div>
        {/* End auto-container */}

        <div className="auto-container">
          <div className="invoice-wrap">
            <div className="invoice-content">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <img src="images/logo.svg" alt="logo" />
                  </Link>
                  <h5>  {candidateView.name}  {candidateView.surname} </h5>
                </div>
                <div className="invoice-id">
                  N.S<span>{candidateView._id}</span>
                </div>
              </div>
              {/* End logobox */}

              <InfoBox />
              {/* End infobox */}

              <div className="table-outer">
                <TableInvoice />
              </div>
              {/* End table-outer */}
            </div>
            {/* End .invoice-content */}

            <div className="invoice-footer">
              <ul className="bottom-links">
                <li>
                  <a
                    href="https://themeforest.net/user/ib-themes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    www.ibthemespro.com
                  </a>
                </li>
                <li>
                  <a href="invoice@superio.com">invoice@superio.com</a>
                </li>
                <li>
                  <a href="tel:123123456">(123) 123-456</a>
                </li>
              </ul>
            </div>
            {/* End invoice footer */}
          </div>
        </div>
      </section>
      {/* <!-- End Invoice Section -->  */}
    </>
  );
};

export default index;

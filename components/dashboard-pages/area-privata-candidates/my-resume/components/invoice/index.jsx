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
                                        </li>
                                        {/*  <li>
                              <span className="icon flaticon-money"></span> $
                              {dataCL?.hourlyRate} / hour
                            </li> */}
                                        <li>
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

           {/*    <InfoBox /> */}
              {/* End infobox */}

              <div className="table-outer">
               {/*  <TableInvoice /> */}
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

import Link from "next/link";

const CallToAction6 = () => {
  return (
    <section className="call-to-action-three style-two">
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title light">
            <h2>Hai domande?</h2>
            <div className="text">
              Sei un azienda cerchi candidati? O un vuoii entrare a far parte de inosstri porfessionissti? Contattaci ora al numero: <br />
              <a href="#">(900) 777-7777.</a>
            </div>
          </div>
          {/* End sec-title */}

          <div className="btn-box">
            <Link href="/faq" className="theme-btn btn-style-three">
            Chiama ora
            </Link>
          </div>
        </div>
        {/* End outer-box */}
      </div>
    </section>
  );
};

export default CallToAction6;

import Link from "next/link";

const CallToAction2 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(images/background/1.jpg)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Start Work è partner delle aziende.
            Start Work promuove occupazione.</h2>
          <div className="text">
          Cerca il candidato o l'offerta di lavoro migliore per te
          </div>
        </div>

        <div className="btn-box">
          <Link href="/jobs" className="theme-btn btn-style-three">
         Cerca Lavoro
          </Link>
          <Link href="/candidates" className="theme-btn btn-style-two">
          Cerca Candidato
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;

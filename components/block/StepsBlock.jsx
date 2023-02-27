const StepsBlock = () => {
  return (
    <section className="steps-section layout-pt-60 layout-pb-60">
      <div className="auto-container">
        <div className="row">
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image">
                <img src="images/index-11/text/image-1.png" alt="about" />
              </figure>
            </div>
          </div>
          {/* End .image-column */}

          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up">
              <div className="sec-title -type-2">
                <h3>
                Start Work è il punto di incontro concreto tra aziende e lavoratori.
                  <br /> steps
                </h3>
                <div className="text">
                Start Work è un contenitore di esperienze imprenditoriali e professionali in aziende di produzione e in Agenzie per il Lavoro, esperienze necessarie alla comprensione dei fabbisogni e delle dinamiche delle aziende e dei lavoratori che vengono accompagnati in un percorso di conoscenza e valutazione.
                </div>
                <ul className="steps-list">
                <div className="text mb-1">
                Start Work è il punto di incontro concreto tra aziende e lavoratori, offrendo i seguenti servizi:                </div>
                  <li>
                    <span className="count">01</span>Somministrazione di lavoro
                  </li>
                  <li>
                    <span className="count">02</span> 
Ricerca e selezione
                  </li>
                  <li>
                    <span className="count">03</span> Politiche attive
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End .content-column */}
        </div>
      </div>
    </section>
  );
};

export default StepsBlock;

import Link from "next/link";

const RegBanner2 = () => {
  const regBannerContent = [
    {
      id: 1,
      name: "Azienda",
      text: `Sei un'Azienda?
      Cerchi dipendenti scopri tutti i nostri professioni disponibili!`,
      avatar: "images/resource/employ.png",
      bannerClass: "banner-style-one",
      btnTxt : "Cerca Professionista",
    },
    {
      id: 2,
      name: "Lavoratore",
      text: ` Compila il modulo per esserre inserito tra i nostri professionisti`,
      avatar: "images/resource/candidate.png",
      bannerClass: "banner-style-two",
      btnTxt : "Candidati",
    },
  ];
  return (
    <>
      {regBannerContent.map((item) => (
        <div
          className={`${item.bannerClass} -type-2 col-lg-6 col-md-12 col-sm-12`}
          key={item.id}
        >
          <div className="inner-box">
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <Link href="/register" className="theme-btn btn-style-five">
                 {item.btnTxt}
              </Link>
            </div>
            <figure className="image">
              <img src={item.avatar} alt="resource" />
            </figure>
          </div>
        </div>
      ))}
    </>
  );
};

export default RegBanner2;

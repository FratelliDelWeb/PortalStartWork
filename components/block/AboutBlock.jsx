const AboutBlock = () => {
  const blockContent = [
    {
      id: 1,
      icon: "images/index-14/icons/1.svg",
      title: "Ricerca lavori",
      bgColor: "-purple",
      text: `Una soluzione per il tuo marketing online lavoratio`,
    },
    {
      id: 2,
      icon: "images/index-14/icons/2.svg",
      title: "Ricerca di lavoro in base alla posiione",
      bgColor: "-orange",
      text: `Ricerchiamo lavooro in base alle tue possibilità di trasferimento`,
    },
    {
      id: 3,
      icon: "images/index-14/icons/3.svg",
      title: "Carriera rogresssiva",
      bgColor: "-red",
      text: `Aggiorna il tuo CV e fatti notanere dalle nostre migliori aziende`,
    },
    {
      id: 4,
      icon: "images/index-14/icons/4.svg",
      title: "Recruiter contact",
      bgColor: "-green",
      text: `Accedi alla tua area privata e condividi le tue informazioni con il recruiter.`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-6" key={item.id}>
          <div className="icon-side -type-1">
            <div className={`icon-wrap ${item.bgColor}`}>
              <img src={item.icon} alt="image" />
            </div>

            <div className="content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutBlock;

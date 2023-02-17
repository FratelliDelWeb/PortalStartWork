const TopCardBlock = () => {
  const cardContent = [
    {
      id: 1,
      icon: "la-user-check",
      countNumber: "22",
      metaName: "Candidati approvati",
      uiClass: "ui-green",
    },
    {
      id: 2,
      icon: "la-user-plus",
      countNumber: "9382",
      metaName: "Candidati impegnato",
      uiClass: "ui-blu",
    },
    {
      id: 3,
      icon: "la-user-clock",
      countNumber: "7",
      metaName: "Candidati in attesa ",
      uiClass: "ui-yellow",
    },
    {
      id: 4,
      icon: "la-user-slash",
      countNumber: "32",
      metaName: "Candidati Scartati",
      uiClass: "ui-red",
    },
    {
      id: 5,
      icon: "la-user-clock",
      countNumber: "32",
      metaName: "Candidati in revisione",
      uiClass: "ui-yellow",
    },
  ];

  return (
    <>
      {cardContent.map((item) => (
        <div
          className="ui-block col-xl-4 col-lg-6 col-md-6 col-sm-6"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon la ${item.icon}`}></i>
            </div>
            <div className="right">
              <h4>{item.countNumber}</h4>
              <p>{item.metaName}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCardBlock;

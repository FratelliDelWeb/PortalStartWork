const TopCardBlock = () => {
  const cardContent = [
    {
      id: 1,
      icon: "la-user-check",
      countNumber: "22",
      metaName: "Candidati pubblicati",
      uiClass: "ui-green",
    },
    {
      id: 2,
      icon: "la-user-plus",
      countNumber: "9382",
      metaName: "Nuovi Candidati",
      uiClass: "ui-blu",
    },
    {
      id: 3,
      icon: "la-user-clock",
      countNumber: "7",
      metaName: "In attesa ",
      uiClass: "ui-yellow",
    },
    {
      id: 4,
      icon: "la-user-slash",
      countNumber: "32",
      metaName: "Scartati",
      uiClass: "ui-red",
    },
  ];

  return (
    <>
      {cardContent.map((item) => (
        <div
          className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
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

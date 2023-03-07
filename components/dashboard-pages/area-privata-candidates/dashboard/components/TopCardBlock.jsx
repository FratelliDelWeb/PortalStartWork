const TopCardBlock = ({user}) => {
  console.log(user)
  const cardContent = [
    {
      id: 1,
      icon: "flaticon-briefcase",
      countNumber: `${user?.interstedTo?.length} `,
      metaName: "Candidature inviate",
      uiClass: "ui-blue",
    },
   
    {
      id: 3,
      icon: "la-male",
      countNumber:  `${user?.status} `,
      metaName: "Stato",
      uiClass: "ui-yellow",
    },
 
  ];

  return (
    <>
    <div className="row"> 
    {cardContent.map((item) => (
        
        <div
          className="ui-block col-xl-6 col-lg-6 col-md-6 col-sm-12"
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
    </div>
  
    </>
  );
};

export default TopCardBlock;

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconName: "placeholder",
      title: "Indirizzo",
      text: (
        <>
         Via Napoli 159, 80013 
          <br /> – Casalnuovo di Napoli
        </>
      ),
    },
    {
      id: 2,
      iconName: "smartphone",
      title: "Telefono",
      text: (
        <>
          <a href="tel:0812779565" className="phone">
          081 277 9565
          </a>
        </>
      ),
    },
    {
      id: 3,
      iconName: "letter",
      title: "Email",
      text: (
        <>
          {" "}
          <a href="mailto:info@start-work.it">info@start-work.it</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div
          className="contact-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <span className="icon">
              <img src={`images/icons/${item.iconName}.svg`} alt="icon" />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;

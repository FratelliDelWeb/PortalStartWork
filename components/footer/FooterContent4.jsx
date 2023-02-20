import Link from "next/link";
import SearchForm from "./SearchForm";

const FooterContent4 = () => {
  const footerContent = [
    {
      id: 1,
      title: "Per i candidati ",
      colClass: "col-lg-3",
      menuList: [
        { name: "Cerca lavoro", route: "/jobs" },
        { name: "Invia candidatura", route: "/" },
        { name: "Accedi alla tua area riservata", route: "/login" },
     
      ],
    },
    {
      id: 2,
      title: "Per le aziende ",
      colClass: "col-lg-3",
      menuList: [
        { name: "Cerca Lavoro", route: "/" },
        { name: "Contattaci", route: "/" },
        { name: "Accedi alla tua area riservata", route: "/login" },
     
      ],
    },
    {
      id: 3,
      title: "Link Utili",
      colClass: "col-lg-2",
      menuList: [
       
        { name: "Faq", route: "/" },
        { name: "Privacy", route: "/" },
        { name: "Contatti", route: "/" },
      ],
    },
  ];
  return (
    <>
      {footerContent.map((item) => (
        <div
          className={`footer-column ${item.colClass} col-md-6 col-sm-12`}
          key={item.id}
        >
          <div className="footer-widget links-widget">
            <h4 className="widget-title">{item.title}</h4>
            <div className="widget-content">
              <ul className="list">
                {item?.menuList?.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.route}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div className="footer-column col-lg-4 col-md-12 col-sm-12">
        <div className="footer-widget">
          <h4 className="widget-title">Unisciti a noi </h4>
          <div className="widget-content">
            <div className="newsletter-form">
              <div className="text">Lascia la tua mail per essere ricontattato</div>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      {/* End .footer-column */}
    </>
  );
};

export default FooterContent4;

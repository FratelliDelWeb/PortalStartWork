const BreadCrumb = ({ title = "" }) => {
  return (
    <div className="upper-title-box">
      <h3>{title}</h3>
      <div className="text">Trova gli ultimi candidati, modifica le loro informazioni ed approvali per renderli pubblici su SMARTWOROK.IT</div>
    </div>
  );
};

export default BreadCrumb;

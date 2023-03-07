const BreadCrumb = ({ title = "" , stato= "" }) => {
  return (
    <div className=" upper-title-box">
      <h3>{title}</h3>
      <div className="text"></div>
    <div> <h5>{stato}</h5> </div>
    </div>
  );
};

export default BreadCrumb;

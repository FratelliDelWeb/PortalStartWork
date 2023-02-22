const JobOverView = ({dataOL}) => {
  return (
    <div className="widget-content">
      <ul className="job-overview p-0">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>AGGIUNTO IL :</h5>
          <span>Posted 1 hours ago</span>
        </li>
      {/*   <li>
          <i className="icon icon-expiry"></i>
          <h5>Expiration date:</h5>
          <span>April 06, 2021</span>
        </li> */}
        <li>
          <i className="icon icon-location"></i>
          <h5>LOCALITÀ:</h5>
          <span>{dataOL.location}</span>
        </li>
        <li>
      
          <i className="icon icon-user-2"></i>
          <h5>AREA PROFESSIONALE:</h5>
          <span>{dataOL.category}</span>
        </li>
        <li>
          <i className="icon icon-clock"></i>
          <h5>AZIENDA:</h5>
          <span>{dataOL.company}</span>
        </li>
        <li>
          <i className="icon icon-rate"></i>
          <h5>CODICE OFFERTA:</h5>
          <span>{dataOL.codiceJod}-{dataOL._id}</span>
        </li>
         <li>
          <i className="icon icon-expiry"></i>
          <h5>TIPO DI CONTRATTO</h5>
          <span>{dataOL.jobType[0]?.type}</span>
        </li> 
      </ul>
    </div>
  );
};

export default JobOverView;

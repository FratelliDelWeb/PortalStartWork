import { useState, useEffect } from "react";

const ListingShowing = ({ maxRecords, total }) => {
  const calculateWidth = (max, tot) => {
    let width = parseInt((max / tot) * 100);
    return width.toString() + "%";
  };

  const [width, setWidth] = useState(calculateWidth(maxRecords, total));
  useEffect(() => {
    setWidth(calculateWidth(maxRecords, total));

    if (maxRecords > total) {
      maxRecords = total;
    }
  }, [maxRecords, total]);

  return (
    <div className="ls-show-more">
      <p>
        Mostrati {maxRecords} su {total} candidati
      </p>
      <div className="bar">
        <span className="bar-inner" style={{ width: width }}></span>
      </div>
      <button className="show-more">Mostra altri</button>
    </div>
  );
};

export default ListingShowing;

import { useState } from "react";

const WidgetTopFilterBox = ({setDataCLfilter,dataCL}) => {
  console.log(dataCL)
const [dataCLfiltered, setdataCLfiltered] = useState(dataCL);



const setSearch = (e) => {
let filtered = dataCL.filter(t=> t.name.includes(e));
console.log(filtered);

setDataCLfilter(filtered)

};

  return (
    
    <div className="chosen-outer">
       <div className="search-box-one">
        <form method="post" action="blog.html">
          <div className="form-group">
            <span className="icon flaticon-search-1"></span>
            <input
              type="search"
              name="search-field"
              placeholder="Search"
              required
              onChange={(e) =>setSearch(e.target.value)}  />
          </div>
        </form>
      </div>
      <select className="chosen-single form-select chosen-container">
        <option>Select Jobs</option>
        <option>Last 12 Months</option>
        <option>Last 16 Months</option>
        <option>Last 24 Months</option>
        <option>Last 5 year</option>
      </select>
      {/* <!--Tabs Box--> */}

      <select className="chosen-single form-select chosen-container">
        <option>All Status</option>
        <option>Last 12 Months</option>
        <option>Last 16 Months</option>
        <option>Last 24 Months</option>
        <option>Last 5 year</option>
      </select>
      {/* <!--Tabs Box--> */}
    </div>
  );
};

export default WidgetTopFilterBox;

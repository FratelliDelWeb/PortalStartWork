import { useRef } from "react";

import ReactToPrint from "react-to-print";
import React from "react";
import Invoice from "./index"
import candidateView from "./index"
import { useState } from "react";
import { useEffect } from "react";

export default function PrintComponent({candidateView}) {
 console.log(candidateView)
  let componentRef = useRef();

  const [candidateV ,setCandidateV] = useState()
  
  useEffect(( ) =>{
    setCandidateV(candidateView)
  },[candidateView])

  return (
    <>
      <div id="print_component">
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button  className="tab-btn  btn-map-innerModal m-1 totals"><i class="las la-print"></i>Stampa</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <ComponentToPrint candidateV={candidateV} ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </>
  );
}

// component to be printed
class ComponentToPrint extends React.Component{
   render() {
    return (
     <Invoice candidateView={candidateView}  ></Invoice>
    );
  }
}
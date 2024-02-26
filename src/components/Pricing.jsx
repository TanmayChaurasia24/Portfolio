import React from 'react';

const Pricing = (props) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center my-5 mx-5">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">{props.basicprice}<small className="text-body-secondary fw-light"></small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>{props.des1}</li>
                <li>{props.des2}</li>
                <li>{props.des3}</li>
                <li>{props.des4}</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg" style={{
                width:"10rem",
                backgroundColor:"#E36414",
                color:"white"
              }}>Continue</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Standard</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">{props.standprice}<small className="text-body-secondary fw-light"></small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>{props.standdes1}</li>
                <li>{props.standdes2}</li>
                <li>{props.standdes3}</li>
                <li>{props.standdes4}</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg " style={{
                width:"10rem",
                backgroundColor:"#E36414",
                color:"white"
              }}>Continue</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Premium</h4> {/* Changed to "Premium" */}
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">{props.preprice}<small className="text-body-secondary fw-light"></small></h1> {/* Changed the price */}
              <ul className="list-unstyled mt-3 mb-4">
                <li>{props.predes1}</li>
                <li>{props.predes2}</li> {/* Increased the storage */}
                <li>{props.predes3}</li>
                <li>{props.predes4}</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg" style={{
                width:"10rem",
                backgroundColor:"#E36414",
                color:"white"
              }}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

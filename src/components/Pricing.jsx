import React from 'react';
import PropTypes from 'prop-types';

const Pricing = ({ 
  basicprice, des1, des2, des3, des4, 
  standprice, standdes1, standdes2, standdes3, standdes4, 
  preprice, predes1, predes2, predes3, predes4, 
  checkouthandler 
}) => {
  const buttonStyle = {
    width: "10rem",
    backgroundColor: "#E36414",
    color: "white"
  };


  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center my-5 mx-5">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">{basicprice}<small className="text-body-secondary fw-light"></small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>{des1}</li>
                <li>{des2}</li>
                <li>{des3}</li>
                <li>{des4}</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg"
                style={buttonStyle}
                onClick={() => {checkouthandler(basicprice)}}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Standard</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">{standprice}<small className="text-body-secondary fw-light"></small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>{standdes1}</li>
                <li>{standdes2}</li>
                <li>{standdes3}</li>
                <li>{standdes4}</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg"
                style={buttonStyle}
                onClick={() => {checkouthandler(standprice)}}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Premium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">{preprice}<small className="text-body-secondary fw-light"></small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>{predes1}</li>
                <li>{predes2}</li>
                <li>{predes3}</li>
                <li>{predes4}</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg"
                style={buttonStyle}
                onClick={() => {checkouthandler(preprice)}}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Pricing.propTypes = {
  basicprice: PropTypes.number.isRequired,
  des1: PropTypes.string,
  des2: PropTypes.string,
  des3: PropTypes.string,
  des4: PropTypes.string,
  standprice: PropTypes.number.isRequired,
  standdes1: PropTypes.string,
  standdes2: PropTypes.string,
  standdes3: PropTypes.string,
  standdes4: PropTypes.string,
  preprice: PropTypes.number.isRequired,
  predes1: PropTypes.string,
  predes2: PropTypes.string,
  predes3: PropTypes.string,
  predes4: PropTypes.string,
  checkouthandler: PropTypes.func.isRequired
};

export default Pricing;

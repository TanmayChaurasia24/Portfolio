import React from 'react';
// import ownerImage from "../images/ownerimage.jpg"; // Import the image

const Pcard = (props) => {
    return (
        <div className="row mb-2" style={{width:"130vw"}}>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0 my-3">{props.title}</h3>
              <p className="card-text my-2">{props.description}</p>
              {<a href={props.to} className="btn btn-sm" style={{
                width:"10rem",
                backgroundColor:"#E36414",
                color:"white"
              }}>
                Continue reading
              </a>}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Pcard;

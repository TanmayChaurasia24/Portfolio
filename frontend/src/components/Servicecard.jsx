import React from 'react';

const Servicecard = (props) => {
    return (
        <div className="card" style={{width: "18rem",height:"auto"}}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="/" className="btn btn-primary">Know More</a>
            </div>
        </div>
    );
}

export default Servicecard;

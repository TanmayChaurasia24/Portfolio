import React from 'react';
import Pricing from './Pricing';
import logo from '../images/logo.png';
import Blogging from '../images/blogging.jpg';
import editing from '../images/videoediting.jpg';
import web from '../images/web.jpg';
import './services.css';

const Services = () => {
  return (
    <>
      <main className=''>
        <div className="container marketing my-5 ">
          <div className="row featurette ">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Website Development <span className="text-body-secondary"></span></h2>
              <Pricing basicprice='₹7,000' des1='1-2 pages' des2='2 days delivery' des3='Unlimited revision' des4='responsive design' standprice='₹13,500' standdes1='4-5 pages' standdes2='4 days delivery' standdes3='unlimited revision' standdes4='responsive design' preprice='₹22,000' predes1='10-11 page' predes2='7 days delivery' predes3='unlimited revision' predes4='responsive design'></Pricing>
            </div>
            <div className="col-md-5">
              <img src={web} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Website Development" width="600" height="600" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Logo Design <span className="text-body-secondary"></span></h2>
            <Pricing basicprice='₹700' des1='1 concept include' des2='2 days delivery' des3='Unlimited revision' des4='printable file' standprice='₹1600' standdes1='2 concept include' standdes2='4 days delivery' standdes3='unlimited revision' standdes4='printable file' preprice='₹2500' predes1='4 concept' predes2='7 days delivery' predes3='unlimited revision' predes4='printable file'></Pricing>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={logo} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Logo" width="600" height="600" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="container marketing my-5">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Blogging<span className="text-body-secondary"></span></h2>
              <Pricing basicprice='₹300' des1='1 article' des2='2 days delivery' des3='Unlimited revision' des4='SEO Friendly' standprice='₹500' standdes1='2 articles' standdes2='4 days delivery' standdes3='unlimited revision' standdes4='SEO Friendly' preprice='₹1200' predes1='5 articles' predes2='6 days delivery' predes3='unlimited revision' predes4='SEO Friendly'></Pricing>
            </div>
            <div className="col-md-5">
              <img src={Blogging} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Website Development" width="600" height="600" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Video Editing <span className="text-body-secondary"></span></h2>
            <Pricing basicprice='₹1000' des1='10 min footage' des2='2 days delivery' des3='Unlimited revision' des4='color grading' standprice='₹1500' standdes1='15 min footage' standdes2='4 days delivery' standdes3='unlimited revision' standdes4='color grading' preprice='₹2,000' predes1='20 min footage' predes2='7 days delivery' predes3='unlimited revision' predes4='color grading'></Pricing>       
            </div>
          <div className="col-md-5 order-md-1">
            <img src={editing} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Logo" width="600" height="600" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </main >
    </>
  );
}

export default Services;

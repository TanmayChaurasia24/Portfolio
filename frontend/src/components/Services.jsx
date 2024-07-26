import React from 'react';
import Pricing from './Pricing';
import Blogging from '../images/blogging.jpg';
import editing from '../images/videoediting.jpg';
import web from '../images/web.jpg';
import './services.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Services = () => {

  const navigate = useNavigate();
  const checkouthandler = async (amount) => {

    const token = localStorage.getItem('token')
    if(!token) {
      navigate('/login')
      return;
    }

    const {data: {order}} = await axios.post('http://localhost:8000/payment/createOrder', { amount });
    console.log(order);

    const options = {
      "key": "rzp_test_uvbKlfoiK4a0IB", // Enter the Key ID generated from the Dashboard
      "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Tanmay Kumar Chaurasia",
      "description": "Test Transaction",
      "image": "https://staticimg.amarujala.com/assets/images/2016/10/28/lord-hanuman_1477623675.jpeg?w=414",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "http://localhost:8000/payment/paymentverification",
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#121212"
      }
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();

  };
  

  return (
    <>
      <main className=''>
        <div className="container marketing my-5 ">
          <div className="row featurette ">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Website Development <span className="text-body-secondary"></span></h2>
              <Pricing 
                basicprice='₹7,000' 
                des1='1-2 pages' 
                des2='2 days delivery' 
                des3='Unlimited revision' 
                des4='responsive design' 
                standprice='₹13,500' 
                standdes1='4-5 pages' 
                standdes2='4 days delivery' 
                standdes3='unlimited revision' 
                standdes4='responsive design' 
                preprice='₹22,000' 
                predes1='10-11 page' 
                predes2='7 days delivery' 
                predes3='unlimited revision' 
                predes4='responsive design' 
                checkouthandler={checkouthandler}
              />
            </div>
            <div className="col-md-5">
              <img src={web} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Website Development" width="600" height="600" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="container marketing my-5">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Blogging<span className="text-body-secondary"></span></h2>
              <Pricing 
                basicprice='₹300' 
                des1='1 article' 
                des2='2 days delivery' 
                des3='Unlimited revision' 
                des4='SEO Friendly' 
                standprice='₹500' 
                standdes1='2 articles' 
                standdes2='4 days delivery' 
                standdes3='unlimited revision' 
                standdes4='SEO Friendly' 
                preprice='₹1200' 
                predes1='5 articles' 
                predes2='6 days delivery' 
                predes3='unlimited revision' 
                predes4='SEO Friendly' 
                checkouthandler={checkouthandler}
              />
            </div>
            <div className="col-md-5">
              <img src={Blogging} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Blogging" width="600" height="600" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Video Editing <span className="text-body-secondary"></span></h2>
            <Pricing 
              basicprice='₹1000' 
              des1='10 min footage' 
              des2='2 days delivery' 
              des3='Unlimited revision' 
              des4='color grading' 
              standprice='₹1500' 
              standdes1='15 min footage' 
              standdes2='4 days delivery' 
              standdes3='unlimited revision' 
              standdes4='color grading' 
              preprice='₹2,000' 
              predes1='20 min footage' 
              predes2='7 days delivery' 
              predes3='unlimited revision' 
              predes4='color grading' 
              checkouthandler={checkouthandler}
            />       
          </div>
          <div className="col-md-5 order-md-1">
            <img src={editing} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Video Editing" width="600" height="600" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </main >
    </>
  );
}

export default Services;

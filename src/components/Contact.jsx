import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/contact/submit', formData);
      if (response.status === 200) {
        setAlertMessage('Your data has been submitted successfully');
        setFormData({
          name: '',
          email: '',
          number: ''
        });
        navigate("/");
      } else if (response.status === 400) {
        setAlertMessage('Data has already been submitted successfully');
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      {alertMessage && <Alert message={alertMessage} />}
      <div className='main-area'>
        <div className="contactarea">
          <div className="leftarea">
            <h1>CONTACT ME</h1>
            <div className="icons d-flex">
              <div>
                <a href="https://github.com/TanmayChaurasia24" style={{ color: "black" }} target="_blank" rel="noopener noreferrer" className="mx-2">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/tanmay-kumar-chaurasia-851806245/" style={{ color: "black" }} target="_blank" rel="noopener noreferrer" className="mx-2">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/tanmay2026/" target="_blank" style={{ color: "black" }} rel="noopener noreferrer" className="mx-2">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <p className='my-5'>
              <p style={{ color: "black", textDecoration: "none" }}>kuamrchaurasiatanmay@gmail.com</p>
            </p>
          </div>


          <div className="rightarea">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" aria-describedby="name" onChange={handleChange} />
              </div>
              <div className="mb-3 form-group">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={handleChange} />
              </div>
              <div className="mb-3 form-group">
                <label htmlFor="number" className="form-label">Phone.no</label>
                <input type="phone" className="form-control" id="number" name="number" onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

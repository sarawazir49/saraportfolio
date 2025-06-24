import React, { useState } from 'react';
import thax from '../images/thax.jpg';
import './contact.css';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('mobileNumber', mobileNumber);

    try {
      const response = await fetch('https://formspree.io/f/xpwdlpza', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setMobileNumber('');
      } else {
        alert('There was an issue submitting your message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <h1 className="page-title">Contact Me</h1>

      <div className="block1">
        <div className="rectangle1">
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="fullName" className="label1">
              Full name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="fullName"
              placeholder="Enter your name"
              className="input-field"
              required
              autoFocus
            />

            <label htmlFor="emailAddress" className="label2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="emailAddress"
              placeholder="Your Email"
              className="input-field"
              required
            />

            <label className="label--large">
              Your message
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols="40"
                rows="10"
                className="textarea"
                placeholder="Enter your message"
                id="yourMessage"
                required
              ></textarea>
            </label>

            <label htmlFor="mobileNumber" className="label4">
              Mobile number
            </label>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              name="mobileNumber"
              id="mobileNumber"
              placeholder="Mobile number"
              className="input-field"
              required
            />

            <button type="submit" className="submit-button">
              Send contact
            </button>

            {submitted && (
              <p style={{ marginTop: '10px', color: 'green' }}>
                Message sent!
              </p>
            )}
          </form>
        </div>

        <div className="rectangle2">
          <img className="thax" style={{ height: '600px' }} src={thax} alt="thax4contact" />
        </div>
      </div>

      <div className="myapps">
        <ul>
          <li><a href="https://Facebook.com"><i className="fa fa-facebook-official"></i> Facebook</a></li>
          <li><a href="https://Twitter.com"><i className="fa fa-twitter"></i> Twitter</a></li>
          <li><a href="https://whatsapp.com"><i className="fa fa-whatsapp"></i> Whatsapp</a></li>
          <li><a href="https://instagram.com"><i className="fa fa-instagram"></i> Instagram</a></li>
          <li><a href="https://snapchat.com"><i className="fa fa-snapchat"></i> Snapchat</a></li>
        </ul>
      </div>
    </>
  );
};

export default Contact;

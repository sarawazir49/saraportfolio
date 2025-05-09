import React, { useState } from 'react';
import thax from '../images/thax.jpg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <>
      <h1 className="page-title">Contact Me</h1>

      <div className="block1">
        <div className="rectangle1">
          <form
            id="contactForm"
            action="https://formspree.io/f/xpwdlpza"
            method="POST"
          >
            <label htmlFor="fullName" className="label1">
              Full name
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
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
              onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setMessage(event.target.value)}
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
              onChange={(event) => setMobileNumber(event.target.value)}
              name="mobileNumber"
              id="mobileNumber"
              placeholder="Mobile number"
              className="input-field"
              required
            />

            {/* Regular Submit Button */}
            <button type="submit" className="submit-button">
              Send contact
            </button>
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

import React, { useState } from 'react';
import thax from '../images/thax.jpg';
import ReusableButton from '../Components/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [sentMessages, setSentMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      name: name,
      email: email,
      message: message
    };
    setSentMessages([...sentMessages, newMessage]);
    setName('');
    setEmail('');
    setMessage('');
    const alertMessage = `Thank you for contacting me.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    alert(alertMessage);
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

            <ReusableButton type="submit">Send contact</ReusableButton>
          </form>
        </div>
        <div className="rectangle2">
          <img className="thax" style={{ height: '600px' }} src={thax} alt="thax4contact" />
        </div>
      </div>
    </>
  );
};

export default Contact;

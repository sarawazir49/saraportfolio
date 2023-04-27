
import React, { useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ReusableButton from '../Components/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentMessages, setSentMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      name: name,
      email: email,
      message: message
    };
    setSentMessages([sentMessages, newMessage]);
    setName('');
    setEmail('');
    setMessage('');
    const alertMessage = `Thank you, your message has been sent. You will receive an answer from us very soon.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    alert(alertMessage);
  };

  return (
    <div>
      <Header/>
      <h2 style={{textAlign: 'center', marginTop: '20px', color: '#5c0c67'}}>Here you can contact me for more information</h2>
      <div className="box1">
      
        <div>
          <form onSubmit={handleSubmit}>
            <h3 style={{color: '#5c0c67', marginTop: '20px'}}>Send a message</h3>
            <div className="box" style={{width: '400px', color: '#5c0c67'}}>
              <label htmlFor="name" className="label1">Name</label>
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="input-field" />
              <hr className="hr1" />
              <label htmlFor="email" className="label1">Email</label>
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="input-field" required autoFocus />
              <hr className="hr1" />
              <label htmlFor="message" className="label2">Message</label>
              <textarea name="message" id="message" value={message} onChange={(event) => setMessage(event.target.value)} className="input-field1"></textarea>
              <hr />
              <ReusableButton type="submit">Send the message</ReusableButton>
            </div>
          </form>
          <p style={{textAlign: "center"}}>OR</p>
          <ReusableButton>Book a call</ReusableButton>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;


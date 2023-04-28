import Header from '../Components/Header';
import Footer from '../Components/Footer';
import thax from '../images/thax.jpg';
import ReusableButton from '../Components/Button';
import React, { useState } from 'react';



const   Contact= ()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [sentMessages, setSentMessages] = useState([]);

  const toSubmit = (event) => {
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
    const alertMessage = `Thank you for contacting me.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    alert(alertMessage);
  };





  return  (
    <>    <Header/>
        <h2 className="page-title">Contact Me</h2>
  
  <div className="block1">
    
    
      <form id="contactForm" onsubmit="return false" onSubmit={toSubmit}>
          <div className="rectangle1">

              <label htmlFor="name" className="label1">Full name</label>
              <input type="text"  value={name} onChange={(event) => setName(event.target.value)} name="name" id="fullName" placeholder="Enter your name" className="input-field" required autoFocus></input>

              <label htmlFor="email" className="label2">Email</label>
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} name="email" id="emailAddress" placeholder="Your Email" className="input-field" required
                  ></input>


              <label className="label--large">
                  Your message
                  <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} cols="40" rows="10" className="textarea"
                      placeHolder="Enter your message" id="yourMessage"  required></textarea>
              </label>

              <label htmlFor="Mobile-no" className="label4">Mobile number</label>
              <input type="number" value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)}  name="Mobile-no" id="mobileNumber" placeHolder="Mobile number" className="input-field"
                  required ></input>
              <ReusableButton type="submit">Send contact</ReusableButton>
          </div>

          
      </form>

<div className="rectangle2">
<img className='thax' style={{height: 600}} src={thax} alt="thax4conact"></img>
</div>

  </div>



 <Footer/> </>
  );
};


export default Contact;

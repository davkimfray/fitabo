import React, { useState } from "react";
import "../styles/contact.css";
import contactImg from "../assets/images/contact.png";
import {ImLocation, ImPhone} from 'react-icons/im'
import {FaEnvelope} from 'react-icons/fa'

export default function Contact() {
  const [from_name, setFrom_name] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [contactsHeader, setContactsHeader] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    setInvalid(false);
    setShowToast(false);

    // emailjs.sendForm('service_c6dspud', 'template_upnn7dp', e.target, "user_K506DfRd22PA0LE5FIvHp")
    //     .then(() => {
    //         setShowToast(true);
    //         resetForm();
    //     }, () => {
    //         setInvalid(true);
    //         setShowToast(true);
    //     });
  }

  function resetForm() {
    setFrom_name("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="contact">
      <img src={contactImg} alt="contact" />
      <form onSubmit={(event) => handleSubmit(event)}>
        <h1>Contact Us</h1>

        <div className="rows">
          <div className="form-group">
            <div className="one">
              <input
                type="text"
                className="form-contro"
                name="from_name"
                placeholder="Name"
                onChange={(event) => setFrom_name(event.target.value)}
                value={from_name}
                required
              />
            </div>
            <div className="two">
              <input
                type="email"
                className="form-contro"
                name="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <textarea
              className="form-control p-4"
              rows="5"
              name="message"
              placeholder="Message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
            />  
            </div>
          
          </div>
        </div>
        <div className="rows">
          <div style={{display: 'flex', justifyContent: 'center',alignItems: 'flex-start'}}>
          <button
            type="submit"
            className="btn sec-main-bg text-white px-5 py-2 h4 font-subheading mx-auto"
          >
            Send Message
          </button>
          </div>
          <div className="contact-info">
            <div>
             <span><ImPhone/></span>
<p>
              +255 712 345 678
            </p>  
            </div>
            <div>
             <span><FaEnvelope/></span>
<p>
              info@fitabo.com
            </p>  
            </div>
            <div>
             <span><ImLocation/></span>
<p>
              Masaki, Dar es Salaam
            </p>  
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

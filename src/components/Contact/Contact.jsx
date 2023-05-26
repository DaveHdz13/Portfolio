import React from "react";
import './contact.css';

function Contact() {
  return(
    <section className="contact-section">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <h1>Email Me</h1>
      </div>
      <div className="contact-me">
        <div className="icons-section">
          <p>Icons here</p>
        </div>
        <div className="form-section">
          <form>
            <div className="form-box1">
              <label htmlFor="name">Your name:</label>
              <input type="text" name="v-name" id="vName" />
              <label htmlFor="name">Organization:</label>
              <input type="text" name="v-organization" id="vOrganization" />
            </div>
            <div className="form-box2">
              <label htmlFor="name">Phone number:</label>
              <input type="number" name="v-phoneNumber" id="vPhoneNumber" />
              <label htmlFor="name">Email:</label>
              <input type="e-mail" name="v-email" id="vEmail" />
            </div>
            <div className="form-box">
              <label htmlFor="name">Message:</label>
              <input type="description" name="v-message" id="vMessage" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
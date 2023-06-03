import React from "react";
import './contact.css';
import Icons from "./Icons";

function Contact({ id }) {
  return(
    <section id={id} className="contact-section">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <h1>Email Me</h1>
      </div>
      <div className="contact-me">
        <Icons />
        <div className="form-section">
          <form>
            <div className="main-info">
              <div className="info-box01">
                <label htmlFor="name">Your name:</label>
                <input type="text" name="v-name" id="vName" />
                <label htmlFor="organization">Organization:</label>
                <input type="text" name="v-organization" id="vOrganization" />
              </div>
              <div className="info-box02">
                <label htmlFor="phoneNumber">Phone number:</label>
                <input type="number" name="v-phoneNumber" id="vPhoneNumber" />
                <label htmlFor="email">Email:</label>
                <input type="e-mail" name="v-email" id="vEmail" />
              </div>
            </div>
            <div className="message-submit">
              <div className="info-box03">
                <label htmlFor="message">Message:</label>
                <input type="description" name="v-message" id="vMessage" />
              </div>
            </div>
            <div className="button-cont">
              <button id="submitBtn" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
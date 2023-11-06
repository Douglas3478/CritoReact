import React from 'react'

const ContactForm = () => {
  return (
    <section className="contact_form">
        <div className="container">
            <div className="form_title">
                <h2>Leave us a message for any information.</h2>
            </div>
            <form>
                <div className="form_group">
                    <input type="text" id="name" placeholder="Name*" required />
                </div>
                <div className="form_group">
                    <input type="email" id="email" placeholder="Email*" required />
                </div>
                <div className="form_group">
                    <textarea id="message" rows="8" placeholder="Your Message*" required></textarea>
                </div>
            </form>
            <div className="send_message">
                <button className="btn-login">Send Message <i className="fa-solid fa-arrow-up-right"></i></button>
            </div>
        </div>
    </section>
  )
}

export default ContactForm
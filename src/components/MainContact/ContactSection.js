import React from 'react'
import visit from '../../images/visit_us.png'
import call from '../../images/call_us.png'
import email from '../../images/email_us.png'

const ContactSection = () => {
  return (
    <section className="contact_section">
            <div className="container">
                <div className="contact_info">
                    <div className="contact_us">
                        <img src={visit} />
                        <div className="contact_details">
                            <h3>Visit Us</h3>
                            <p>Sveavägen 31 </p>
                            <p>111 34 STOCKHOLM</p>
                        </div>
                    </div>
                    <div className="contact_us">
                        <img src={call} />
                        <div className="contact_details">
                            <h3>Call Us</h3>
                            <p>+46 (8) 121 470 50</p> 
                            <p>+46 (8) 121 470 51</p>
                        </div>
                    </div>
                    <div className="contact_us">
                        <img src={email} />
                        <div className="contact_details">
                            <h3>Email Us</h3>
                            <p>info@crito.com</p>
                            <p>support@crito.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ContactSection
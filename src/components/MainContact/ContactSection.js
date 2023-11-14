import React from 'react'
import ContactBox from './ContactComponents/ContactBox'
import visit from '../../images/visit_us.png'
import call from '../../images/call_us.png'
import email from '../../images/email_us.png'

const ContactSection = () => {

    const contact = [
        { img: visit, title: 'Visit Us', description: 'Sveavägen 31\n111 34 STOCKHOLM' },
        { img: call, title: 'Call Us', description: '+46 (8) 121 470 50\n+46 (8) 121 470 51' },
        { img: email, title: 'Email Us', description: 'info@crito.com\nsupport@crito.com' },
    ];

  return (
    <section className="contact_section">
            <div className="container">
                <div className="contact_info">
                    
                    {contact.map((contact, index) => (
                        <ContactBox key={index} img={contact.img} title={contact.title} description={contact.description} />
                        ))}

                </div>
            </div>
        </section>
  )
}

export default ContactSection
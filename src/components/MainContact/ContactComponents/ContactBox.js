import React from 'react'

const ContactBox = ({img, title, description}) => {
    const lines = description.split('\n');
  return (
    <div className="contact_us">
        <img src={img} />
        <div className="contact_details">
            <h3>{title}</h3>
            {lines.map((line, index) => (
            <p key={index}>{line}</p>
            ))}
        </div>
    </div>
  )
}

export default ContactBox
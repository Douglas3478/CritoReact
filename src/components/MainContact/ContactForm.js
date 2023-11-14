import React, { useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [message, setMessage] = useState ('')
    const [errorMessage, setErrorMessage] = useState ('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage('')

        const user = {name, email, message}
        const json = JSON.stringify (user)
        
        const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        })

        
        switch (result.status){
            case 200:
                clearForm()
                alert('tack för ditt meddelande')
                break;
            case 400:
                setErrorMessage ('Glömde du något? Kontrollera fälten')
                break
        }
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

  return (
    <section className="contact_form">
        <div className="container">
            <div className="form_title">
                <h2>Leave us a message for any information.</h2>
                <p className="error-message">{errorMessage}</p>
            </div>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form_group">
                    <input type="text" placeholder="Name*" value={name} onChange={(e) => setName (e.target.value)} />
                </div>
                <div className="form_group">
                    <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail (e.target.value)} />
                </div>
                <div className="form_group">
                    <textarea id="message" placeholder="Your Message*" value={message} onChange={(e) => setMessage (e.target.value)}></textarea>
                </div>

                <div className="send_message">
                <button className="btn-login" type="submit" >Send Message <i className="fa-solid fa-arrow-up-right"></i></button>
                </div>
            </form>
            
        </div>
    </section>
  )
}

export default ContactForm
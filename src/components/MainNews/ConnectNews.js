import React from 'react'
import element from '../../images/Element.svg'
const ConnectNews = () => {
  return (
    <section className="connect_section">
        <div className="container">
            <nav>
                <a href="index.html">Menu</a>
                <a className="contact_active" href="contact.html">Contact</a>
            </nav>
            <div className="title_contact">
                <h1>News & Articles</h1>
            </div>
            <img src={element}/>
        </div>
    </section>
  )
}

export default ConnectNews
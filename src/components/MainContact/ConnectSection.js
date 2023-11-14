import React from 'react'
import element from '../../images/Element.svg'
import { NavLink } from 'react-router-dom'

const ConnectSection = () => {
  return (
    <section className="connect_section">
            <div className="container">
                <nav>
                    <NavLink to="/">Menu</NavLink>
                    <NavLink to="Contacts">Contact</NavLink>
                    
                </nav>
                <div className="title_contact">
                    <h1>Let's Connect</h1>
                </div>
                <img src={element} />
            </div>
        </section>
  )
}

export default ConnectSection
import React from 'react'
import lines_right from '../../images/backgroundbot.svg'


const NewsletterSection = () => {
  return (
    <section className="newsletter">
        <img className="background_lines_right" src={lines_right} alt="" />  
        <div className="container">
            <h2>Get News Updated By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <button className="btn-login">Subscribe <i className="fa-solid fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default NewsletterSection
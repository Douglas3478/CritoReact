import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SummarySection from '../components/MainHome/SummarySection'
import ConnectSection from '../components/MainContact/ConnectSection'
import ContactSection from '../components/MainContact/ContactSection'
import ContactForm from '../components/MainContact/ContactForm'
import GoogleMapsSection from '../components/MainContact/GoogleMapsSection'


const Contacts = () => {
  return (
    <div className='wrapper'>
      <Header />
      <ConnectSection />
      <ContactSection />
      <ContactForm />
      <GoogleMapsSection />
      <SummarySection />
      <Footer />
    </div>
  )
}

export default Contacts
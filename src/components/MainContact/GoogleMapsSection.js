import React from 'react'

const GoogleMapsSection = () => {
  return (
    <section className="google_maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d285.4972721786861!2d18.06194632677825!3d59.336405635461226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9daa385697c3%3A0x20a6f0f7ca13921!2sCrito!5e0!3m2!1ssv!2sse!4v1696400049582!5m2!1ssv!2sse"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  )
}

export default GoogleMapsSection
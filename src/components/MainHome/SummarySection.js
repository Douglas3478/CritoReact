import React from 'react'
import logo_white from '../../images/logo_white.png'
import SummaryBox from './MainComponents/SummaryBox'


const SummarySection = () => {
    const sections = [
      {
        title: "Company",
        links: [
          { url: "/company/about", linkText: "About" },
          { url: "/company/features", linkText: "Features" },
          { url: "/company/works", linkText: "Works" },
          { url: "/company/career", linkText: "Career" },
        ]
      },
      {
        title: "Help",
        links: [
          { url: "/help/customersupport", linkText: "Customer Support" },
          { url: "/help/deliverydetails", linkText: "Delivery Details" },
          { url: "/help/termsandconditions", linkText: "Terms & Conditions" },
          { url: "/help/privacypolicy", linkText: "Privacy Policy" },
        ]
      },
      {
        title: "Resources",
        links: [
            { url: "/resources/freeebooks", linkText: "Free eBooks"},
            { url: "/resources/deliverydetails", linkText: "Development Tutorial"},
            { url: "/resources/termsandconditions", linkText: "How to - Blog"},
            { url: "/resources/privacypolicy", linkText: "Youtube Playlist"},
        ]
      },
      {
        title: "Link",
        links: [
            { url: "/resources/freeebooks", linkText: "Free eBooks"},
            { url: "/resources/deliverydetails", linkText: "Development Tutorial"},
            { url: "/resources/termsandconditions", linkText: "How to - Blog"},
            { url: "/resources/privacypolicy", linkText: "Youtube Playlist"},
        ]
      },
    ]
    return (
      <section className="summary">
        <div className="container">
          <div className="end_logo">
            <img src={logo_white} alt="Logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
            </p>
          </div>
          <div className="end_links">
              
            {sections.map((section, index) => (
              <div key={index}>
                <h3>{section.title}</h3>
                {section.links.map((link, idx) => (
                  <SummaryBox key={idx} url={link.url} linkText={link.linkText} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default SummarySection
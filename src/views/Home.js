import React from 'react'
import ServiceSection from '../components/MainHome/ServiceSection'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ShowcaseSection from '../components/MainHome/ShowcaseSection'
import CompanySection from '../components/MainHome/CompanySection'
import FeaturesSection from '../components/MainHome/FeaturesSection'
import AboutSection from '../components/MainHome/AboutSection'
import WhyUsSection from '../components/MainHome/WhyUsSection'
import ProjectSection from '../components/MainHome/ProjectSection'
import TeamSection from '../components/MainHome/TeamSection'
import TestimonialSection from '../components/MainHome/TestimonialSection'
import ArticleNewsSection from '../components/MainHome/ArticleNewsSection'
import NewsletterSection from '../components/MainHome/NewsletterSection'
import SummarySection from '../components/MainHome/SummarySection'

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <ShowcaseSection />
      <CompanySection />
      <FeaturesSection />
      <AboutSection />
      <ServiceSection />
      <WhyUsSection />
      <ProjectSection />
      <TeamSection />
      <TestimonialSection />
      <ArticleNewsSection />
      <NewsletterSection />
      <SummarySection />
      <Footer />
    </div>
  )
}

export default Home
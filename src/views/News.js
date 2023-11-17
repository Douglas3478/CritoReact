import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SummarySection from '../components/MainHome/SummarySection'
import ConnectNews from '../components/MainNews/ConnectNews'
import NewsArticles from '../components/MainNews/NewsArticles'
import NewsletterSection from '../components/MainHome/NewsletterSection'

const News = () => {
  return (
    <div className='wrapper'>
        <Header />
        <ConnectNews />
        <NewsArticles />
        <NewsletterSection />
        <SummarySection />
        <Footer />
    </div>
  )
}

export default News
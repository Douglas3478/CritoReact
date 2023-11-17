import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SummarySection from '../components/MainHome/SummarySection'
import ConnectNews from '../components/MainNews/ConnectNews'
import ArticlesOne from '../components/MainNews/Articles/ArticlesOne'
import ArticleNewsSection from '../components/MainHome/ArticleNewsSection'

const Digitalization = () => {
  return (
    <div className='wrapper'>
        <Header />
        <ConnectNews />
        <ArticlesOne />
        <ArticleNewsSection />
        <SummarySection />
        <Footer />
    </div>
  )
}

export default Digitalization
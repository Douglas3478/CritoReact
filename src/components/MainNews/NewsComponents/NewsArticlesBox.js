import React from 'react'

const NewsArticlesBox = ({img, title, description, text}) => {
  return (
    <article>
        <img src={img}/>
        <p>{title}</p>
        <h3>{description}</h3>
        <p>{text}</p>
    </article>
  )
}

export default NewsArticlesBox
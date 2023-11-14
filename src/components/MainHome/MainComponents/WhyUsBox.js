import React from 'react'


const WhyUsBox = ({img, title, description}) => {
  return (

    <article>
        <img src={img} />
        <h3>{title}</h3>
        <p>{description}</p>
    </article>
  )
}

export default WhyUsBox
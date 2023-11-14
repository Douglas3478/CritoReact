import React from 'react'
import black_line from '../../../images/black_line.png'
import arrow_black from '../../../images/arrow-black.png'

const ServiceBox = ({title, description, url}) => {
  return (
    <article>
        <img src={black_line} />
        <h3>{title}</h3>
        <p>{description}</p>
        <img className="arrow_black" href={url} src={arrow_black} />
    </article>
  )
}

export default ServiceBox
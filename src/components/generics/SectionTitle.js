import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <div className="section_title">
        <p>{description}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle
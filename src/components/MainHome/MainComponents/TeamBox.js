import React from 'react'

const TeamBox = ({img, name, title}) => {
  return (
    <div className="names_title">
        <img src={img}/>
        <h3>{name}</h3>
        <p>{title}</p>   
    </div>
  )
}

export default TeamBox
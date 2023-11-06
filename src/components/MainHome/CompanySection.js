import React from 'react'
import paperz from '../../images/paperz_logo.svg'
import dorfus from '../../images/dorfus_logo.svg'
import martino from '../../images/martino_logo.svg'
import square from '../../images/square_logo.svg'
import gabona from '../../images/gobona_logo.svg'

const CompanySection = () => {
  return (
    <section className="companies">
        <div className="company_logos">
            <img className="paperz" src={paperz}/>
            <img className="paperz" src={dorfus}/>
            <img className="paperz" src={martino}/>
            <img className="paperz" src={square}/>
            <img className="paperz" src={gabona}/>
        </div>
    </section>
  )
}

export default CompanySection
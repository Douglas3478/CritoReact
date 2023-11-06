import React from 'react'
import team_one from '../../images/team_one.png'
import team_two from '../../images/team_two.png'
import team_three from '../../images/team_three.png'
import team_four from '../../images/team_four.png'

const TeamSection = () => {
  return (
    <section className="team_section">
        <div className="container">
            <div className="meet_team">
                <div className="section_title">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <div className="browse_team">
                    <button className="btn-login">Browse Team <i className="fa-solid fa-arrow-up-right"></i></button>
                </div>
            </div>
            <div className="team_members">
                <div className="names_title">
                    <img src={team_one} alt="" />
                    <h3>Kristine Palmer</h3>
                    <p>Chef Operation Officer</p>   
                </div>
                
                <div className="names_title">
                    <img src={team_two} alt="" />
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>   
                </div>
                
                <div className="names_title">
                    <img src={team_three} alt="" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>   
                </div>
                
                <div className="names_title">
                    <img src={team_four} alt="" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>   
                </div>
            </div>
            <div className="slider_dots">
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
            </div>
        </div>
    </section>
  )
}

export default TeamSection
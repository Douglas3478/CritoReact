import React from 'react'
import team_one from '../../images/team_one.png'
import team_two from '../../images/team_two.png'
import team_three from '../../images/team_three.png'
import team_four from '../../images/team_four.png'
import TeamBox from './MainComponents/TeamBox'

const TeamSection = () => {

    const team = [
        { img: team_one, name: "Kristine Palmer", title: "Chef Operation Officer"},
        { img: team_two, name: "Mark Aubri", title: "Senior Consultant"},
        { img: team_three, name: "Kimberly Hansen", title: "Senior Consultant"},
        { img: team_four, name: "Justin Willoman", title: "Senior Tech Consultant"},
    ]


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
                {team.map ((team, index) => (
                    <TeamBox key ={index} img={team.img} name={team.name} title={team.title} />
                ))}
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
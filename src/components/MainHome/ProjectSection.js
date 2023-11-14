import React from 'react'
import project_one from '../../images/project_one.png'
import project_two from '../../images/project_two.png'
import project_three from '../../images/project_three.png'
import project_four from '../../images/project_four.png'
import ProjectBox from './MainComponents/ProjectBox'

const ProjectSection = () => {

    const project = [
        { img: project_one, title: "Grow your business", url:"/project/one"},
        { img: project_two, title: "Why your client needs a responsive website", url:"/project/two"},
        { img: project_three, title: "Educate your employees to get better results", url:"/project/three"},
        { img: project_four, title: "Business Insights is a important piece of your business", url:"/project/four"},
    ]

  return (
    <section className="project_section">
        <div className="container">
            <div className="section_title">
                <p> Project & Case Studies</p>
                <h2> Let’s Looks Our Global Projects</h2>
            </div>
            <div className="project_and_cases">
                {project.map ((project, index) => (
                    <ProjectBox key ={index} img={project.img} title={project.title} url={project.url} />
                ))}
            </div>
            <div className="center_content">
                <a className="btn-black" href="#">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection
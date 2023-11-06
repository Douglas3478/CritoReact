import React from 'react'
import project_one from '../../images/project_one.png'
import project_two from '../../images/project_two.png'
import project_three from '../../images/project_three.png'
import project_four from '../../images/project_four.png'

const ProjectSection = () => {
  return (
    <section className="project_section">
        <div className="container">
            <div className="section_title">
                <p> Project & Case Studies</p>
                <h2> Let’s Looks Our Global Projects</h2>
            </div>
            <div className="project_and_cases">
                <article>
                    <img src={project_one} />
                    <h3>Grow your business</h3>
                    <a href="#">Read more <i className="fa-regular fa-arrow-up-right"></i></a>
                </article>
                <article>
                    <img src={project_two} />
                    <h3>Why your client needs a responsive website</h3>
                    <a href="#">Read more <i className="fa-regular fa-arrow-up-right"></i></a>
                </article>
                <article>
                    <img src={project_three} />
                    <h3>Educate your employees to get better results</h3>
                    <a href="#">Read more <i className="fa-regular fa-arrow-up-right"></i></a>
                </article>
                <article>
                    <img src={project_four} />
                    <h3>Business Insights is a important piece of your business</h3>
                    <a href="#">Read more <i className="fa-regular fa-arrow-up-right"></i></a>
                </article>
            </div>
            <div className="center_content">
                <a className="btn-black" href="#">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection
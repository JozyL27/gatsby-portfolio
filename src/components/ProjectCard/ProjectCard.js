import React from "react"
import "./ProjectCard.css"

const ProjectCard = props => {
  return (
    <li className="projectContainer">
      <img src={props.image} className="projImage" alt="project" />
      <p className="projPara">{props.info}</p>
      <div className="projLinkContainer">
        <a href={props.github} className="projLink" target="blank">
          Github
        </a>
        <a href={props.appLink} target="blank" className="projLink">
          {props.name}
        </a>
      </div>
    </li>
  )
}

export default ProjectCard

import React from "react"
import "./ProjectCard.css"

const ProjectCard = props => {
  return (
    <li className="projectContainer">
      <img src={props.image} className="projImage" />
      <p className="projPara">{props.info}</p>
      <a href={props.github} className="projLink" target="blank">
        Github
      </a>
      <a href={props.appLink} target="blank" className="projLink">
        {props.name}
      </a>
    </li>
  )
}

export default ProjectCard

import React from "react"
import "./ProjectCard.css"

const ProjectCard = props => {
  return (
    <li className="projectContainer">
      <img src={props.image} />
      <p>{props.info}</p>
      <a>{props.appLink}</a>
      <a>{props.github}</a>
    </li>
  )
}

export default ProjectCard

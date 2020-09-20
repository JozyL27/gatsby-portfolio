import React from "react"
import ProjectCard from "../ProjectCard/ProjectCard"
import CardiganImage from "../../images/cardigan.png"
import KatiaImage from "../../images/katiaNew.png"
import HablaImage from "../../images/habla.png"
import "./Projects.css"

const projectsInfo = [
  {
    name: "Cardigan",
    image: CardiganImage,
    appLink: "https://district-client.vercel.app/",
    github: "https://github.com/JozyL27/district-client",
    info: `Cardigan is a blogsite for menswear
    enthusiasts. It supports CRUD operations for
    the following: articles, comments, and profiles.
    It also supports real time messaging by
    leveraging Socket.io's front and backend APIs.`,
  },
  {
    name: "Katia",
    image: KatiaImage,
    appLink: "https://katia-jozyedit.vercel.app/swipe",
    github: "https://github.com/JozyL27/katia-jozyedit",
    info: `Katia is a social media application made
    for gamers by gamers. Quickly and easily
    find others who share the same games
    and platforms as you.`,
  },
  {
    name: "Habla",
    image: HablaImage,
    appLink: "https://spaced-repitition-app.now.sh/",
    github:
      "https://github.com/thinkful-ei-leopard/spaced-repitition-jose-christopher-client",
    info: `Habla is an application that uses the
    spaced repetition technique to help users
    memorize a foreign language.`,
  },
]

const Projects = () => {
  return (
    <ul className="projectsContainer">
      {projectsInfo.map((project, idx) => (
        <ProjectCard
          key={idx}
          name={project.name}
          image={project.image}
          info={project.info}
          appLink={project.appLink}
          github={project.github}
        />
      ))}
    </ul>
  )
}

export default Projects

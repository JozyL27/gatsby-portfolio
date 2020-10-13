import React from "react"
import Css from "../../assets/css3.svg"
import Github from "../../assets/github.svg"
import Html from "../../assets/html5.svg"
import Js from "../../assets/javascript.svg"
import Jest from "../../assets/jest.svg"
import JWT from "../../assets/jsonwebtokens.svg"
import Material from "../../assets/material-ui.svg"
import Mocha from "../../assets/mocha.svg"
import Node from "../../assets/node-dot-js.svg"
import Npm from "../../assets/npm.svg"
import Postgres from "../../assets/postgresql.svg"
import Socket from "../../assets/socket-dot-io.svg"
import Vscode from "../../assets/visualstudiocode.svg"
import ReactLogo from "../../assets/reactLogo2.svg"
import GatsbyLogo from "../../assets/gatsby.svg"
import ApolloLogo from "../../assets/apollographql.svg"
import GraphQL from "../../assets/graphql.svg"
import VercelLogo from "../../assets/vercel.svg"
import HerokuLogo from "../../assets/heroku.svg"
import RouterLogo from "../../assets/reactrouter.svg"
import "./Skills.css"

const Skills = () => {
  return (
    <section className="skillSection">
      <div className="skillsContainer">
        <ReactLogo className="skillSvg" />
        <GatsbyLogo className="skillSvg" />
        <Node className="skillSvg" />
        <ApolloLogo className="skillSvg" />
        <GraphQL className="skillSvg" />
        <Js className="skillSvg" />
        <Html className="skillSvg" />
        <Css className="skillSvg" />
        <Postgres className="skillSvg" />
        <Jest className="skillSvg" />
        <Mocha className="skillSvg" />
        <JWT className="skillSvg" />
        <RouterLogo className="skillSvg" />
        <Socket className="skillSvg" />
        <Material className="skillSvg" />
        <VercelLogo className="skillSvg" />
        <HerokuLogo className="skillSvg" />
        <Vscode className="skillSvg" />
        <Npm className="skillSvg" />
        <Github className="skillSvg" />
      </div>
    </section>
  )
}

export default Skills

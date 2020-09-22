import React from "react"
import Github from "../../assets/github.svg"
import LinkedIn from "../../assets/linkedin.svg"
import Mail from "../../assets/mail.svg"

import "./ContactInfo.css"

const ContactInfo = () => {
  return (
    <section className="contactContainer">
      <a
        href="https://github.com/JozyL27"
        className="contactLink"
        target="blank"
      >
        <Github className="svg" />
      </a>
      <a
        href="https://www.linkedin.com/in/jozy-lopez/"
        className="contactLink"
        target="blank"
      >
        <LinkedIn className="svg" />
      </a>
      <a
        href="mailto:jozylopez27@gmail.com"
        className="contactLink"
        target="blank"
      >
        <Mail className="svg" />
      </a>
    </section>
  )
}

export default ContactInfo

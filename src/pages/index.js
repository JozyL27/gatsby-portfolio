import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../Styles/global.css"
import Collage from "../components/Collage/Collage"
import TabNavigation from "../components/TabNavigation/TabNavigation"
import AboutMe from "../components/AboutMe/AboutMe"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"
import ContactInfo from "../components/ContactInfo/ContactInfo"

const IndexPage = () => {
  const [tabValue, setTabValue] = useState(0)
  const handleChange = (event, newValue) => {
    setTabValue(newValue)
  }
  useEffect(() => {
    setTabValue(0)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Collage />

      <section className="mainSection">
        <TabNavigation value={tabValue} handleChange={handleChange} />
        {tabValue === 0 ? (
          <AboutMe />
        ) : tabValue === 1 ? (
          <Projects />
        ) : tabValue === 2 ? (
          <Skills />
        ) : tabValue === 3 ? (
          <ContactInfo />
        ) : null}
      </section>
    </Layout>
  )
}

export default IndexPage

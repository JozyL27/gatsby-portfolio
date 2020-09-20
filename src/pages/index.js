import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../Styles/global.css"
import Collage from "../components/Collage/Collage"
import TabNavigation from "../components/TabNavigation/TabNavigation"
import AboutMe from "../components/AboutMe/AboutMe"

const IndexPage = () => {
  const [tabValue, setTabValue] = useState(0)
  const handleChange = (event, newValue) => {
    setTabValue(newValue)
  }
  useEffect(() => {
    setTabValue(0)
  }, [])

  console.log(tabValue)
  return (
    <Layout>
      <SEO title="Home" />
      <Collage />

      <section className="mainSection">
        <TabNavigation value={tabValue} handleChange={handleChange} />
        {tabValue === 0 ? <AboutMe /> : null}
      </section>
    </Layout>
  )
}

export default IndexPage

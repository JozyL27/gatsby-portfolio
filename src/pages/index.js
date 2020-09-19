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
  useEffect(() => {
    setTabValue(0)
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <Collage />

      <section className="mainSection">
        <TabNavigation value={tabValue} />
        {tabValue === 0 ? <AboutMe /> : null}
      </section>
    </Layout>
  )
}

export default IndexPage

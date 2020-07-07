import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import statue from '../images/IMG_2080.jpeg'
import man from '../images/IMG_1504.jpeg'
import venice from '../images/IMG_1019.jpeg'
import me from '../images/me.jpeg'
import '../Styles/global.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <section className="fourpics"> 
                  <div className="first">
                    <div className="one">
                        <img className="collageImgs" src={statue} alt="Statue of Liberty" />
                    </div>
                    <div className="two">
                        <img className="collageImgs" src={man} alt="Man walking home from work" />
                    </div>
                  </div>
                  <div className="second">
                    <div className="three">
                        <img className="collageImgs" src={venice} alt="Venice Beach sign" />
                    </div>
                    <div className="four">
                        <img className="collageImgs" id="myPort" src={me} alt="Portrait of the website's author" />
                    </div>
                  </div>
        </section>
  </Layout>
)

export default IndexPage
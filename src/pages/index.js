import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import statue from '../images/IMG_2080.jpeg'
import man from '../images/IMG_1504.jpeg'
import venice from '../images/IMG_1019.jpeg'
import me from '../images/me.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <>
      <div class="fourpics"> 
                <div class="first">
                  <div class="one">
                      <img class="collageImgs" src={statue} alt="Statue of Liberty" />
                  </div>
                  <div class="two">
                      <img class="collageImgs" src={man} alt="Man walking home from work" />
                  </div>
                </div>
                <div class="second">
                  <div class="three">
                      <img class="collageImgs" src={venice} alt="Venice Beach sign" />
                  </div>
                  <div class="four">
                      <img class="collageImgs" id="myPort" src={me} alt="Portrait of the website's author" />
                  </div>
                </div>
      </div>
    </>

    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage

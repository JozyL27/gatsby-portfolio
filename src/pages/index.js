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


        <section className='aboutSection'>
          <h3 className='aboutHeader'>About Me</h3>
          <p className="firstPara">
            Raised in the east & south sides of Chicago I, Jose Lopez, am a fullstack web developer, poker player, soccer enthusiast, and designer reseller.
            After studying sociology at Prairie State College, I began to teach myself how to code basic HTML, CSS, and JavaScript after a friend approached me to design a website for a clothing line.
            During the process, I found my love and passion for coding as to me a webpage resembled a blank canvas.
            This blank canvas allowed me to both help others & express myself creatively.
            My websites convey my love and admiration of minimalist fashion, architecture, and design philosophy.
          </p>
        </section>
  </Layout>
)

export default IndexPage
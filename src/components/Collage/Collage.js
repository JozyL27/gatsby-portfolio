import React from "react"
import statue from "../../images/statue.jpeg"
import man from "../../images/IMG_1504.jpeg"
import venice from "../../images/venice.jpeg"
import me from "../../images/me.jpeg"

export default function Collage() {
  return (
    <section className="fourpics">
      <div className="first">
        <div className="one">
          <img className="collageImgs" src={statue} alt="Statue of Liberty" />
        </div>
        <div className="two">
          <img
            className="collageImgs"
            src={man}
            alt="Man walking home from work"
          />
        </div>
      </div>
      <div className="second">
        <div className="three">
          <img className="collageImgs" src={venice} alt="Venice Beach sign" />
        </div>
        <div className="four">
          <img
            className="collageImgs"
            id="myPort"
            src={me}
            alt="Portrait of the website's author"
          />
        </div>
      </div>
    </section>
  )
}

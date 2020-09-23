import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

const TabNavigation = props => {
  return (
    <>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
        value={props.value}
        onChange={props.handleChange}
      >
        <Tab label="About" value={0} />
        <Tab label="Projects" value={1} />
        <Tab label="Skills" value={2} />
        <Tab label="Contact" value={3} />
      </Tabs>
    </>
  )
}

export default TabNavigation

import React from "react"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

const TabNavigation = props => {
  return (
    <>
      <Paper>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
          value={props.value}
          onChange={props.handleChange}
        >
          <Tab label="About" />
          <Tab label="Projects" />
          <Tab label="Tech" />
          <Tab label="Contact" />
        </Tabs>
      </Paper>
    </>
  )
}

export default TabNavigation

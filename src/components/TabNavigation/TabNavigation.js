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
          <Tab label="About" value={0} />
          <Tab label="Projects" value={1} />
          <Tab label="Skills" value={2} />
          <Tab label="Contact" value={3} />
        </Tabs>
      </Paper>
    </>
  )
}

export default TabNavigation

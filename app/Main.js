import { func } from "prop-types"
import React from "react"
import ReactDom from "react-dom"

function OurApp() {
  return (
    <>
      <OurHeader />
      <OurContent />
      <OurFooter />
    </>
  )
}
//Usage Of Components
function OurHeader() {
  return <h1>Our Amazing React app</h1>
}
function OurContent() {
  return <p>The Current time is {new Date().toLocaleString()}</p>
}
function OurFooter() {
  return <small>This is Copyright Footer</small>
}
setInterval(function () {
  ReactDom.render(<OurApp />, document.querySelector("#app"))
}, 1000)
//Load Just the content not the whole page if changes happen
if (module.hot) {
  module.hot.accept()
}

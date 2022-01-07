import React from "react"
import ReactDom from "react-dom"

function OurApp() {
  return (
    <>
      <h1>Our Amazing React app</h1>
      <p>The Current time is {new Date().toLocaleString()}</p>
      <small>This is Copyright Footer</small>
    </>
  )
}

setInterval(function () {
  ReactDom.render(<OurApp />, document.querySelector("#app"))
}, 1000)
if (module.hot) {
  module.hot.accept()
}

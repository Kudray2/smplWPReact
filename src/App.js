import React from "react"
import Bcomp from "./components/Babelcomp.jsx"
import WebpackComp from "./components/Webpack.jsx"
import ReactComp from "./components/React.jsx"

function App() {
  console.log(" Webpack here and React ")
  const verion = React.version
  return (
    <div classname="App">
      <p> {verion} </p>
      <Bcomp />
      <WebpackComp />
      <ReactComp />
    </div>
  )
}
export default App

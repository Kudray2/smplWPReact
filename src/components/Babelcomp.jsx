import React from "react"
import babelLogo from '../img/Babel_Logo.png'
const Bcomp = () => {
  console.log("Babel component render")
  return (
    <>
     <img src={babelLogo} alt="babelLogo" />
    </>
  )
}

export default Bcomp

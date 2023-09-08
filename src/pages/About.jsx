import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (<div className="">
    <h1>About</h1>
    <Outlet />
  </div>
  )
}

export default About
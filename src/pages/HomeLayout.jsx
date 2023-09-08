import React from 'react'
import { Link } from 'react-router-dom'

const HomeLayout = () => {
  return (<div className="">
    <h1>Homepage</h1>
    <Link to='/about'>About</Link>
  </div>
  )
}

export default HomeLayout
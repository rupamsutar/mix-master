import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (<div className="">
    <h1>NAVBAR</h1>
    <Outlet />
  </div>
  )
}

export default HomeLayout
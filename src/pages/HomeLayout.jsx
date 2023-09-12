import React from 'react'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading'
  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading ? <div className='loading' /> : <Outlet /> }
      </section>
      
    </>
  )
}

export default HomeLayout
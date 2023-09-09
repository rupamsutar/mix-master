import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from "../assets/not-found.svg";

const Error = () => {

const error = useRouteError();
if (error.status === 404) {
  return (
    <>
      <div className="">
        <img src={img} alt="Not Found" />
        <h3>Ohh !</h3>
        <p>We cant seem to find the page  we are looking for !</p>
        <Link to='/'>back home</Link>
      </div>
    </>
  )
}

return(
<>
  <div className="">
    <h3>Something Went Wrong</h3>
  </div>
</>
)
  
}

export default Error
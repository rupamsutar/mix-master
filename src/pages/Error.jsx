import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from "../assets/not-found.svg";
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {

const error = useRouteError();
if (error.status === 404) {
  return (
    <Wrapper>
      <div className="">
        <img src={img} alt="Not Found" />
        <h3>Ohh !</h3>
        <p>We cant seem to find the page  we are looking for !</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
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
import React from 'react'
import './Error.css'
import Img from '../../assets/undraw_server_down_s-4-lk.svg';
import {useNavigate } from 'react-router-dom';

function ErrorPage() {
const navigate = useNavigate();

    return (
      <section className="error">
        <div className="error-Img">
          <img src={Img} alt="" className="Img" />
        </div>
        <div className="error-text">
          <p className="error-text-p">
            <span className="error-text-span">Oops!</span> The page you are looking
            for might have been removed, had its name changed, or is temporarily
            unavailable.
          </p>
          <button className='error-home' onClick={()=>{navigate('/')}}>Go to Home Page</button>
        </div>
      </section>
    );
}

export default ErrorPage
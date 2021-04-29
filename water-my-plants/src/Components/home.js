import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
          <img src={logo} alt='logo' />
          <div className='buttons'>
            <Link to='/login'>
              <button>Log in</button>
            </Link>
            <Link to='signup'>
              <button>Sign up</button>
            </Link>
          </div>  
        </div>
    )
}

export default Home;
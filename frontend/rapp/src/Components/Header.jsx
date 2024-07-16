import React from 'react';
import logo from './mylogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header-container">
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <img
                src={logo}
                alt="Logo"
                style={{ height: '70px', width: '70px' ,position:'absolute',left:'19px',top:'0px'}}
              />
            </Link>
          </li>
          <li>
            <Link to="/home">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon={faUser} /> About
            </Link>
          </li>
          <li>
            <Link to="/works">
              <FontAwesomeIcon icon={faBriefcase} /> Works
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <FontAwesomeIcon icon={faTools} style={{top:'0px'}}/> Skills
            </Link>
          </li>
          <li>
            <Link to="/contact">
            <button className="button" style={{borderRadius:'14px',top:'-260px',justifyContent:'center',alignItems:'center'}}>
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

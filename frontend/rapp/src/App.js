import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const addDetails = () => {
    const userData = {
      name: name,
      email: email,
      message: message,
    };

    axios
      .post('http://127.0.0.1:8000/api/submit_user_data', userData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error submitting user data:', error);
      });
  };

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/get_user_data/{user_id}')
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setMessage(res.data.message);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="App-component">
      <p style={{ color: 'white', fontSize: '30px', fontFamily: 'sans-serif' ,marginLeft:'-50px',marginTop:'100px'}}>Software Engineer.</p>
      <h1 style={{ fontSize: '50px', fontFamily: 'sans-serif',marginLeft:'-50px' }}>
        Hi, This is <span style={{ color: 'blue', fontSize: '75px' }}>Shalini Ravi.</span>
      </h1>
      <br /><br />

      <div className="Button-style1" style={{ textAlign: 'center' }}>
        <a href="https://drive.google.com/file/d/1KZR8uXk8RaLkH2D5UcLLjII2nc9hPbRG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button style={{
            padding: '10px 30px',
            fontSize: '20px',
            color: 'blue',
            borderRadius: '5px',
            border: '1px solid white',
            transition: 'color 0.3s ease',
            marginTop:'200px',
            marginBottom:'100px'
          }}>
            Download Resume
          </button>
        </a>
      </div>

      
      <div >
        <a href="https://github.com/Shaliniravi01" target="_blank" rel="noopener noreferrer" className="git-hub" style={{
          color: '495E57',
          fontSize: '35px',
          transition: 'color 0.3s ease',
          position:'absolute',
          marginLeft:'435px'
      
        }}>
          
          <FontAwesomeIcon icon={faGithub} /></a>
          
        <a href="https://www.linkedin.com/in/shalinir198/" target="_blank" rel="noopener noreferrer" className="linked-in" style={{
          color: '495E57',
          fontSize: '35px',
          transition: 'color 0.3s ease',
          marginLeft:'535px',
          position:'absolute',
        
        }}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        
      </div>
    </div>
  );
}

export default App;

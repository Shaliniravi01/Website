import React from 'react';
import ReactDOM from 'react-dom/client';

import Layout from './Components/Layout';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import './index.css';

import App from './App';
import About from "./Page/About.js"
import Contact from './Page/Contact.js';
import Skills from './Page/Skills.js';
import Works from './Page/Works.js';


config.autoAddCss = false; // Disable the auto-add of CSS since we're importing it ourselves

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout>
      <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/works' element={<Works/>}/>
    <Route path='/home' element={<App/>}/>

   <Route path="/contact" element={<Contact/>} />

    </Routes>
    </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

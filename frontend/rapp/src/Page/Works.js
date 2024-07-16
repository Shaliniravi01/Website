import React from 'react';

const Works = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>

            <h2 style={{ color: 'blue', marginTop: '100px' }}>Internships</h2>
            
            <div  style={{ textAlign: 'left', marginLeft: '10%', marginRight: '10%' ,color:'gray'}}>
                <h5 style={{color:'white',marginTop:'90px'}}>Price Waterhouse Coopers (PwC) Acceleration Centers</h5>
                <h6>Launchpad Trainee-Virtual</h6>
                <ul className="flex-container2" style={{color:'white',marginLeft:'40px',marginTop:'30px'}}>
                    <li>Learnt the essentials of IT fundamentals by exploring algorithms, flowcharts, pseudocodes, Agile methodology, N-tier architecture and object-oriented technology.</li>
                    <li>Enhanced RDBMS skills by working with DDL, DML, DCL, joins, subqueries along with Python programming.</li>
                    <li>Implemented EDA, web scrapping, OLAP, multivariate analysis, ETL, data mining, DWDM.</li>
                </ul>

                <h5 style={{color:'white',marginTop:'70px'}}>Prodigy InfoTech</h5>
                <h6>Data Science Internship-Virtual</h6>
                <ul className="flex-container2" style={{color:'white',marginTop:'30px',marginLeft:'40px'}}> 
                    <li>Gained hands-on experience in EDA, data visualisation.</li>
                    <li>Analysed and visualised sentiment patterns in social media data.</li>
                    <li>Utilised predictive model - decision tree classifier for predicting traffic accident hotspots.</li>
                </ul>

                <h5 style={{color:'white',marginTop:'70px'}}>NSIC Technical Services Centre, Chennai</h5>
                <h6>Android App Development Internship-Virtual</h6>
                <ul className="flex-container2" style={{marginTop:'30px',marginLeft:'40px',color:'white'}}>
                    <li>Designed user-friendly interfaces for basic games using JAVA along with the utilisation of Android SDK.</li>
                    <li>Implemented JAVA for development.</li>
                </ul>
            </div>

            

            <h2 style={{ color: 'blue', marginTop: '100px' }}>Projects</h2>
            <div style={{ textAlign: 'left', marginLeft: '10%', marginRight: '10%' }}>
                <h5 style={{marginTop:'60px'}}>Plant Phenotyping Under Complex Lighting Conditions In Machine Learning</h5>
                <ul  className="flex-container2" style={{marginTop:'35px',marginLeft:'40px',color:'white'}}>
                    <li>Utilised self-supervised semantic segmentation approach, combining Conditional Random Fields (CRFs) with Convolutional Neural Networks (CNN).</li>
                    <li>The approach aims to reduce labor-intensive and error-prone predictions.</li>
                    <li>Achieved FBD score of 89.7% while performing the color-based leaf segmentation for Cannabis dataset.</li>
                </ul>

                <h5 style={{marginTop:'65px'}}>Portfolio Website - Frontend</h5>
                <ul className="flex-container2" style={{marginTop:'35px',marginLeft:'40px',color:'white',marginBottom:'100px'}}>
                    <li>Built and designed a portfolio website's frontend with HTML, CSS, JavaScript, React.</li>
                    <li>Learnt about version control system - Git and GitHub.</li>
                    <li>Learnt about design tool - Figma.</li>
                </ul>
            </div>
            <h2 style={{ color: 'blue', marginTop: '130px' }}>Training Courses</h2>
            <div style={{ textAlign: 'left', marginLeft: '10%', marginRight: '10%' }}>
                <h5 style={{color:'white',marginTop:'70px' }}>MathWorks Training Services</h5>
                <h6>Self-paced Training Course</h6>
                <ul  style={{marginTop:'30px',marginLeft:'40px',color:'white',marginBottom:'180px'}}>
                    <li>Learnt basics of machine learning and deep learning through hands-on exercises.</li>
                </ul>
            </div>
        </div>
    );
}

export default Works;

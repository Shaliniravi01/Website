import React from 'react';
import '../App.css'; // Ensure the path is correct

const About = () => {
    return (
        <div style={{ textAlign: 'center', padding: '70px' }}>
            <div id="animate">
                <h2 style={{ color: 'blue', marginTop: '70px' }} className='About-me'>About Me</h2>
            </div>
            <div style={{ margin: '100px' }}>
                <div className="flex-container" style={{ padding: 100, marginBottom: '200px', color: 'gray' }}>
                    <p>
                        <br />
                        A <span>Forever Learner</span>, who is passionate about coding and technology. <br /><br />
                        Being an IT student, I embrace a continuous learning mindset, seeking to expand my knowledge and stay updated with technologies. Learning from both successes and failures has been
                        crucial in my growth as a coder. Whether it's mastering a new programming language, contributing to open-source projects, or creating innovative applications, I am dedicated to pushing my boundaries and achieving new milestones.
                        I always seek for a position to expand my technical skills, to work on real-world projects and collaborating with a team of
                        experienced developer community. Beyond coding, I find joy in exploring different facets of life outside the digital realm. The fusion of technology and art has forever intrigued me, creating a fascinating crossroads where innovation meets creativity.
                    </p>
                </div>

                <h3 style={{ color: 'blue', fontSize: '40px', marginBottom: '70px' }}>Educational Qualification</h3>
                <center>
                    <table style={{ width: '80%', margin: '10 solid auto', borderCollapse: 'collapse', borderColor: 'white', marginTop: '100px', color: 'gray' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid white', padding: '9px' }}>Level</th>
                                <th style={{ border: '1px solid white', padding: '8px' }}>Institution</th>
                                <th style={{ border: '1px solid white', padding: '8px' }}>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid white', padding: '18px' }}>Under Graduation</td>
                                <td style={{ border: '1px solid white', padding: '8px' }}>SASTRA University</td>
                                <td style={{ border: '1px solid white', padding: '8px' }}>8.2555 CGPA</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid white', padding: '18px' }}>HSC</td>
                                <td style={{ border: '1px solid white', padding: '8px' }}>Bharani Park Matriculation Higher Sec. School</td>
                                <td style={{ border: '1px solid white', padding: '8px' }}>95.78%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid white', padding: '18px' }}>SSLC</td>
                                <td style={{ border: '1px solid white', padding: '8px' }}>Equitas Gurukul Matric. school</td>
                                <td style={{ border: '1px solid white', padding: '8px' }}>94.6%</td>
                            </tr>
                        </tbody>
                    </table >
                </center>
                <h2 style={{ color: 'blue', marginTop: '120px' }}>Achievements & Awards</h2>
            </div>

            {/* Grid Section with Images */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px', marginTop: '70px' }}>
                <marquee>
                <div style={{ width: '280px', height: '280px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="5.jpg" alt="Image 1" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                </marquee>
                <div style={{ width: '280px', height: '280px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="6.jpg" alt="Image 2" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '280px', height: '280px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="9.jpg" alt="Image 3" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '380px', height: '240px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="8.jpg" alt="Image 4" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '280px', height: '280px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="13.jpg" alt="Image 5" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '380px', height: '240px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="10.jpg" alt="Image 6" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '380px', height: '240px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="11.jpg" alt="Image 7" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '280px', height: '280px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="12.jpg" alt="Image 8" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '380px', height: '240px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="17.jpg" alt="Image 9" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '380px', height: '240px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="14.jpg" alt="Image 10" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '280px', height: '280px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="3.jpg" alt="Image 8" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '380px', height: '240px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="1.jpg" alt="Image 9" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                
                <div style={{ width: '380px', height: '240px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="16.jpg" alt="Image 9" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '280px', height: '280px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="7.jpg" alt="Image 8" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ width: '280px', height: '280px', boxShadow: '9px 20px 20px blue', borderRadius: '10px', margin: 'auto', marginBottom: '60px' }}>
                    <img src="15.jpg" alt="Image 8" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
            </div>
        </div>
    );
}

export default About;

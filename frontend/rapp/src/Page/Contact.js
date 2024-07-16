import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const API_URL = 'http://localhost:5000/api/contact'; 

    const addDetails = async (event) => {
        event.preventDefault();

        const data = {
            name,
            email,
            message
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const responseData = await response.json();
            console.log('SUCCESS!', responseData);
            alert('Message sent successfully!');
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <div id="contact" style={{ padding: '20px', marginTop: '80px', textAlign: 'center' }}>
            <h1 className='contactPageTitle' style={{ color: 'blue', marginBottom: '20px' }}>Let's catch up!</h1>
            <h2 className='contactDesc' style={{ marginBottom: '40px' }}>Please fill out the form below to discuss any work opportunities</h2>
            <form className='contactForm' onSubmit={addDetails} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <input
                    type="text"
                    className="name"
                    onChange={event => setName(event.target.value)}
                    placeholder="Name"
                    value={name}
                    required
                    style={{
                        marginBottom: '20px',
                        padding: '10px',
                        width: '100%',
                        maxWidth: '500px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    }}
                />
                <input
                    type="email"
                    className="email"
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Email"
                    value={email}
                    required
                    style={{
                        marginBottom: '15px',
                        padding: '10px',
                        width: '100%',
                        maxWidth: '500px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    }}
                />
                <textarea
                    className="msg"
                    name="message"
                    onChange={event => setMessage(event.target.value)}
                    rows="5"
                    placeholder="Write Something"
                    value={message}
                    required
                    style={{
                        marginBottom: '15px',
                        padding: '10px',
                        width: '100%',
                        maxWidth: '500px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        resize: 'none',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        background: 'blue',
                        borderColor: 'blue',
                        borderRadius: '8px',
                        padding: '10px 45px',
                        marginTop: '20px',
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contact;

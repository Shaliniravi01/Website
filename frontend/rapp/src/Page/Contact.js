import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API_URL = 'https://portfolio-website-u430.onrender.com';

    const addDetails = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        const data = { name, email, message };

        try {
            const response = await fetch(`${API_URL}/api/contact`, { // Ensure this endpoint is correct
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Status: ${response.status}, Message: ${errorData.message}`);
            }

            const responseData = await response.json();
            console.log('SUCCESS!', responseData);
            alert(responseData.message);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('FAILED...', error);
            setError('Failed to send message. Please try again later.');
        } finally {
            setLoading(false);
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
                    aria-label="Name"
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
                    aria-label="Email"
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
                    aria-label="Message"
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
                    disabled={loading}
                    style={{
                        background: loading ? 'grey' : 'blue',
                        borderColor: 'blue',
                        borderRadius: '8px',
                        padding: '10px 45px',
                        marginTop: '20px',
                        color: 'white',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        marginBottom: '85px'
                    }}
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Contact;

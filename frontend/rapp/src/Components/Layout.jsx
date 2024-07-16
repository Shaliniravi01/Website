import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0, padding: 0 }}>
            <Header />
            <div style={{ flex: 1, background: 'black', padding: '20px' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;

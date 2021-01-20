import React from 'react';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

const Container = () => {
    return (
        <div className='Container'>
            CONTENT
            <Header />
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

export default Container;
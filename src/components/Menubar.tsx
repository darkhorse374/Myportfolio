import React, { useState } from 'react';

const MenuBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="menu-bar">
            <div className="logo" onClick={toggleMenu}>
                <h1 className='fontBig'>Menu</h1>
            </div>
            {
                isMobileMenuOpen ?
                    <nav className="menu">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#summary">Summary</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#experience">Experience</a></li>
                        </ul>
                    </nav>
                    :
                    <></>
            }
        </div>
    );
};

export default MenuBar;
import React, { useState } from 'react';
import toggleBlack from '../images/toggleBlack.png';
import logoBlack from '../images/star-wars-black.png';
import toggleWhite from '../images/toggleWhite.png';
import logoWhite from '../images/star-wars-white.png';

const Header = () => {

    const [colorMode, setColorMode] = useState('darkMode');

    const colorToggle = (e) => {
        e.preventDefault();
        const background = document.querySelector('.App');

        if (e.target.src === toggleWhite) {
            setColorMode('darkMode');
            background.classList.replace('lightMode', 'darkMode');
        } else if (e.target.src === toggleBlack) {
            setColorMode('lightMode');
            background.classList.replace('darkMode', 'lightMode');
        }
    }

    return (
        <div className="header">
            <img src={colorMode === 'darkMode' ? logoWhite : logoBlack} alt="star wars logo" class="header-logo-img" />
            <img src={colorMode === 'darkMode' ? toggleWhite : toggleBlack} alt="toggle button star wars logo" class="header-toggle-img" onClick={colorToggle} />
        </div>
    )
}
export default Header;
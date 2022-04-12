import React from 'react';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    const year = new Date().getFullYear()
    console.log(year)
    return (
        <footer>
            <p><small>All Copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> to this website {year}</small></p>
        </footer>
    );
};

export default Footer;
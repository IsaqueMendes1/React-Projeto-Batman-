import React from 'react';
import './footer.css';
import Logo from '../assets/logo2.png';

function Footer() {
    return (
        <footer>
            <img id='logo' src={Logo}></img>
            <p className='dev'>Desenvolvido por: Isaque Mendes</p>
        </footer>
    )
}

export default Footer;
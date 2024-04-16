import React from "react";
import './contato.css';
import Header from "../../components/header/header";
import Footer from '../../components/footer/footer';
import Cards from "../../components/cards/cards";

function Contato() {
    return (
        <>
        <Header />
        <div className='cards'>
                <div className='card banner-1'>Robert Patinsson - Batman</div>
                <div className='card banner-2'>Zoe Kravitz - Mulher Gato</div>
                <div className='card banner-3'>Jeffrey Wright - Gordon</div>
                <div className='card banner-4'>Charada</div>
                <div className='card banner-5'>Pinguim</div>
        </div>
        <Footer />
        <Cards />
        </>
    )
}

export default Contato;
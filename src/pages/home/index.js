import React from "react";
import Header from "../../components/header/header";
import './style.css';
import Video from '../../components/assets/video.mp4'
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";

function Home() {
    return (
        <>
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={Video} />
                        Seu navegador não possui suporte para videos
                    </video>
                    <div id='sinopse'>
                        <p className='description'>
                        Lorem ipsum dolor sit amet. Est iste culpa et error laboriosam aut sunt ratione. Eos optio esse ab maxime voluptas et totam dolores vel cumque aspernatur qui iste cupiditate aut nulla rerum a accusantium aliquid.
                        </p>
                        <button className='button'>Comprar ingresso</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer />
        </>
    )
}

export default Home;
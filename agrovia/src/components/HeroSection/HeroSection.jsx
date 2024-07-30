import { useEffect } from 'react';

// External
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Styles
import './HeroSection.css';
import HeroImage from '../../assets/hero.svg';


function HeroSection() {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            modules: [Navigation, Pagination],
            loop: true,
            speed: 1000,
            effect: 'fade',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        return () => {
            swiper.destroy();
        }
    }, []);

    return (
        <section className="hero" id='hero'>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide hero-slide bg-neutral-silver">
                        <div className="container mx-auto px-4 py-10 sm:px-6 md:px-8 lg:px-8 lg:py-20 flex flex-col-reverse lg:flex-row items-center">
                            <div className="text-center lg:text-left lg:w-2/3 mt-10 lg:mt-0">
                                <h1 className="h1 mb-4 text-neutral-d_grey text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Bienvenue sur <span className='text-primary-primary'>Agrovia</span></h1>
                                <p className="text-base sm:text-lg md:text-xl lg:text-lg mb-8 text-neutral-grey">Votre plateforme innovante pour le commerce en gros de céréales.</p>
                                <button className="btn btn-primary btn-normal">S&apos;inscrire</button>
                            </div>
                            <div className="md:flex md:w-1/3 justify-center items-center">
                                <img src={HeroImage} alt="Hero" className="w-52 h-auto max-w-xs md:w-full lg:max-w-lg mx-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide hero-slide bg-primary-secondary text-white">
                        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-20 text-center">
                            <h1 className="h1 mb-4">Solutions Innovantes</h1>
                            <p className="text-lg mb-8">Nous offrons des solutions technologiques de pointe pour simplifier le commerce de gros des céréales.</p>
                            <button className="btn btn-secondary btn-normal">En savoir plus</button>
                        </div>
                    </div>

                    <div className="swiper-slide hero-slide bg-primary-info text-white">
                        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-20 text-center">
                            <h1 className="h1 mb-4">Rejoignez Notre Communauté</h1>
                            <p className="text-lg mb-8">Faites partie d&apos;une communauté dynamique dédiée à l&apos;industrie agroalimentaire.</p>
                            <button className="btn btn-tertiary btn-normal">S&apos;inscrire</button>
                        </div>
                    </div>
                </div>

                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev text-primary-primary"></div>
                <div className="swiper-button-next text-primary-primary"></div>
            </div>
        </section>
    );
}

export default HeroSection;

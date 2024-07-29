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
                        <div className="container mx-auto px-14 py-20 flex items-center">
                            <div className="container text-start">
                                <h1 className="h1 mb-4 text-neutral-d_grey">Lessons and insights <br /> <span className='text-primary-primary'>from 8 years</span></h1>
                                <p className="text-lg mb-8 text-neutral-grey">Where to grow your business as a photographer: site or social media?</p>
                                <button className="btn btn-primary btn-normal">Register</button>
                            </div>

                            <div className="right-container">
                                <img src={HeroImage} alt="Hero" />
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide hero-slide bg-primary-secondary text-white">
                        <div className="container mx-auto px-4 py-20 text-center">
                            <h1 className="h1 mb-4">Innovative Solutions</h1>
                            <p className="text-lg mb-8">We provide cutting-edge technology solutions.</p>
                            <button className="btn btn-secondary btn-normal">Learn More</button>
                        </div>
                    </div>

                    <div className="swiper-slide hero-slide bg-primary-info text-white">
                        <div className="container mx-auto px-4 py-20 text-center">
                            <h1 className="h1 mb-4">Join Our Community</h1>
                            <p className="text-lg mb-8">Be a part of a vibrant community.</p>
                            <button className="btn btn-tertiary btn-normal">Sign Up</button>
                        </div>
                    </div>
                </div>

                <div className="swiper-pagination "></div>
                <div className="swiper-button-prev text-primary-primary"></div>
                <div className="swiper-button-next text-primary-primary"></div>
            </div>
        </section>
    );
}

export default HeroSection;

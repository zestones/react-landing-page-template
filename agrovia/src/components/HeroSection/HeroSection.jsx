import React, { useEffect } from 'react';

// External
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Styles
import './HeroSection.css';


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
        <section className="hero">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide hero-slide bg-primary-primary text-white">
                        <div className="container mx-auto px-4 py-20 text-center">
                            <h1 className="h1 mb-4">Welcome to Our Website</h1>
                            <p className="text-lg mb-8">Discover our amazing products and services.</p>
                            <button className="btn btn-primary btn-normal">Get Started</button>
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

                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </section>
    );
}

export default HeroSection;

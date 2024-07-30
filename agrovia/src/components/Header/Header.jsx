import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

function Header() {
    const [activeLink, setActiveLink] = useState('hero');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });

                setActiveLink(targetId);
                if (document.getElementById('mobile-menu')) {
                    setMobileMenuOpen(false);
                }
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => link.addEventListener('click', handleScroll));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleScroll));
        };
    }, []);

    const activeLinkClassName = (name) => `
        hover:border-neutral-grey hover:text-neutral-black px-1 pt-1 border-b-2 text-sm font-medium 
        ${!mobileMenuOpen ? 'inline-flex items-center' : 'flex justify-center w-full border-transparent'} 
        ${activeLink === name ? 'border-primary-primary text-primary-primary' : 'text-neutral-l_grey border-transparent'}`;

    return (
        <header className="bg-neutral-silver fixed z-50 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="shrink-0 flex items-center">
                        <img className="h-16 w-auto sm:h-12 md:h-16 lg:h-24" src={logo} alt="Logo" />
                    </div>
                    <div className="flex items-center">
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <a href="#hero" className={activeLinkClassName('hero')}>Accueil</a>
                            <a href="#community" className={activeLinkClassName('community')}>Services</a>
                            <a href="#achievements" className={activeLinkClassName('achievements')}>Solution</a>
                            <a href="#footer" className={activeLinkClassName('footer')}>Contact</a>
                        </div>
                        <div className="sm:hidden flex items-center">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span className="sr-only">Ouvrir le menu principal</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <button type="button" className="btn btn-tertiary btn-medium">Se connecter</button>
                        <button type="button" className="btn btn-primary btn-medium ml-4">S&apos;inscrire</button>
                    </div>
                </div>
            </div>
            <div
                className={`overflow-hidden transform transition-all duration-300 ease-in-out sm:hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                id="mobile-menu"
            >
                <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 justify-center items-center bg-neutral-light_gray">
                    <a href="#hero" className={activeLinkClassName('home')}>Accueil</a>
                    <a href="#community" className={activeLinkClassName('services')}>Services</a>
                    <a href="#achievements" className={activeLinkClassName('features')}>Fonctionnalités</a>
                    <a href="#footer" className={activeLinkClassName('contact')}>Contact</a>
                    <hr />
                    <button type="button" className="btn btn-tertiary btn-medium w-full mt-6 transition duration-300 ease-in-out transform hover:bg-gray-200">Se connecter</button>
                    <button type="button" className="btn btn-primary btn-medium w-full mt-2 transition duration-300 ease-in-out transform hover:bg-primary-dark">S&apos;inscrire</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
